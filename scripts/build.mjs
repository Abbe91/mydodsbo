/**
 * Build wrapper: on Windows, applies a trace-file EPERM patch before invoking
 * `next build`. On other platforms, delegates directly to `next build`.
 */
import { spawnSync } from 'child_process'
import { resolve, dirname, join } from 'path'
import { fileURLToPath } from 'url'
import { existsSync, renameSync, readFileSync } from 'fs'

const isWin = process.platform === 'win32'
const __dir = dirname(fileURLToPath(import.meta.url))
const patchPath = resolve(__dir, 'patch-trace.cjs')
const nextBin = resolve(__dir, '..', 'node_modules', 'next', 'dist', 'bin', 'next')
const projectRoot = resolve(__dir, '..')

// With `output: 'export'`, a dynamic route whose generateStaticParams()
// returns zero entries fails the build (Next.js error E87) — static export
// has no server fallback for unreached dynamic paths. /uppdrag/[slug] has
// no params until content/uppdrag.ts has at least one real job, so pull the
// route out of app/ for the duration of the build in that case; this makes
// the export produce zero pages for it instead of failing.
const uppdragSlugDir    = join(projectRoot, 'app', 'uppdrag', '[slug]')
const uppdragSlugBackup = join(projectRoot, 'app', 'uppdrag', '__slug_backup__')
const uppdragSrc = readFileSync(join(projectRoot, 'content', 'uppdrag.ts'), 'utf-8')
const uppdragIsEmpty = /export const uppdrag:\s*Uppdrag\[\]\s*=\s*\[\s*\]/.test(uppdragSrc)

if (uppdragIsEmpty && existsSync(uppdragSlugDir)) {
  renameSync(uppdragSlugDir, uppdragSlugBackup)
}

// Use relative path with forward slashes to avoid backslash escaping issues
const nodeOptions = isWin ? '--require ./scripts/patch-trace.cjs' : ''

let result
try {
  result = spawnSync(
    process.execPath,
    [nextBin, 'build'],
    {
      stdio: ['inherit', 'inherit', 'inherit'],
      env: {
        ...process.env,
        ...(nodeOptions ? { NODE_OPTIONS: nodeOptions } : {}),
      },
      cwd: projectRoot,
    }
  )
} finally {
  if (uppdragIsEmpty && existsSync(uppdragSlugBackup)) {
    renameSync(uppdragSlugBackup, uppdragSlugDir)
  }
}

process.exit(result?.status ?? 1)
