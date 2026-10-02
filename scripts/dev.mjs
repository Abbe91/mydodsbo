/**
 * Dev wrapper: on Windows, clears the stale .next/trace lock and applies the
 * trace-file EPERM patch before invoking `next dev`.
 * On other platforms, delegates directly to `next dev`.
 */
import { spawnSync } from 'child_process'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'
import { existsSync, renameSync, unlinkSync } from 'fs'

const isWin = process.platform === 'win32'
const __dir = dirname(fileURLToPath(import.meta.url))
const nextBin = resolve(__dir, '..', 'node_modules', 'next', 'dist', 'bin', 'next')
const projectRoot = resolve(__dir, '..')

if (isWin) {
  // Remove the stale trace file that Windows Defender tends to lock after a
  // previous dev session. Redirect to a temp name first; if that fails too,
  // the patch below catches all subsequent write attempts anyway.
  const tracePath = resolve(projectRoot, '.next', 'trace')
  if (existsSync(tracePath)) {
    try {
      unlinkSync(tracePath)
    } catch {
      try { renameSync(tracePath, tracePath + '.old') } catch { /* locked — patch will handle it */ }
    }
  }
}

const nodeOptions = isWin ? '--require ./scripts/patch-trace.cjs' : ''

const result = spawnSync(
  process.execPath,
  [nextBin, 'dev', ...process.argv.slice(2)],
  {
    stdio: ['inherit', 'inherit', 'inherit'],
    env: {
      ...process.env,
      ...(nodeOptions ? { NODE_OPTIONS: nodeOptions } : {}),
    },
    cwd: projectRoot,
  }
)

process.exit(result?.status ?? 1)
