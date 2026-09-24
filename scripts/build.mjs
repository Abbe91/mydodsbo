/**
 * Build wrapper: on Windows, applies a trace-file EPERM patch before invoking
 * `next build`. On other platforms, delegates directly to `next build`.
 */
import { spawnSync } from 'child_process'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const isWin = process.platform === 'win32'
const __dir = dirname(fileURLToPath(import.meta.url))
const patchPath = resolve(__dir, 'patch-trace.cjs')
const nextBin = resolve(__dir, '..', 'node_modules', 'next', 'dist', 'bin', 'next')

// Use relative path with forward slashes to avoid backslash escaping issues
const nodeOptions = isWin ? '--require ./scripts/patch-trace.cjs' : ''

const result = spawnSync(
  process.execPath,
  [nextBin, 'build'],
  {
    stdio: ['inherit', 'inherit', 'inherit'],
    env: {
      ...process.env,
      ...(nodeOptions ? { NODE_OPTIONS: nodeOptions } : {}),
    },
    cwd: resolve(__dir, '..'),
  }
)

process.exit(result.status ?? 1)
