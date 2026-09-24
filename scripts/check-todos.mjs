#!/usr/bin/env node
/**
 * Scans source files for TODO markers and placeholder values.
 * - SITE_LAUNCHED=false  → warns and exits 0 (build continues)
 * - SITE_LAUNCHED=true   → exits 1 (build fails)
 */
import { readdirSync, readFileSync, statSync } from 'fs'
import { join, extname, resolve } from 'path'

const isLaunched = process.env.SITE_LAUNCHED === 'true'
const root = resolve('.')

// Directories to scan for TODO markers and Lorem ipsum
const SCAN_DIRS = ['app', 'components', 'content', 'lib']
// Extensions to inspect
const SCAN_EXTS = new Set(['.ts', '.tsx'])

// ── Patterns ─────────────────────────────────────────────────────────────────

// Matches the word TODO in any context (comments, strings, JSX)
const TODO_RE = /\bTODO\b/g

// Lorem ipsum anywhere in any scanned file
const LOREM_RE = /lorem ipsum/i

// Placeholder values to detect specifically inside lib/company.ts
const COMPANY_CHECKS = [
  { re: /XXX/,              label: 'XXX placeholder' },
  { re: /0{4}/,             label: '0000 placeholder' },
  { re: /1234567/,          label: '1234567 placeholder' },
  { re: /['"]\s*['"]/,      label: 'empty string value' },
  { re: /Exempel/i,         label: '"Exempel" placeholder' },
  { re: /'example'|"example"/i, label: '"example" placeholder' },
  { re: /'placeholder'|"placeholder"/i, label: '"placeholder" placeholder' },
]

// ── File walker ───────────────────────────────────────────────────────────────

function walk(dir) {
  let files = []
  let entries
  try { entries = readdirSync(dir) } catch { return files }
  for (const name of entries) {
    if (name.startsWith('.') || name === 'node_modules' || name === '.next' || name === 'out') continue
    const full = join(dir, name)
    const st = statSync(full)
    if (st.isDirectory()) {
      files = files.concat(walk(full))
    } else if (st.isFile() && SCAN_EXTS.has(extname(name))) {
      files.push(full)
    }
  }
  return files
}

// ── Collect violations ────────────────────────────────────────────────────────

const violations = []

function addViolation(file, line, label) {
  violations.push({ file: file.replace(root + '\\', '').replace(root + '/', ''), line, label })
}

const files = SCAN_DIRS.flatMap(d => walk(join(root, d)))
const companyFile = join(root, 'lib', 'company.ts')

for (const file of files) {
  const src = readFileSync(file, 'utf-8')
  const lines = src.split('\n')

  // TODO check
  TODO_RE.lastIndex = 0
  let m
  while ((m = TODO_RE.exec(src)) !== null) {
    const lineNum = src.slice(0, m.index).split('\n').length
    addViolation(file, lineNum, `TODO marker on line ${lineNum}: …${lines[lineNum - 1]?.trim().slice(0, 60)}…`)
    // advance to avoid infinite loop on zero-width match
    if (TODO_RE.lastIndex === m.index) TODO_RE.lastIndex++
  }

  // Lorem ipsum check
  if (LOREM_RE.test(src)) {
    addViolation(file, '?', 'Lorem ipsum found')
  }

  // company.ts placeholder checks
  if (file === companyFile) {
    for (const { re, label } of COMPANY_CHECKS) {
      if (re.test(src)) {
        addViolation(file, '?', `company.ts: ${label}`)
      }
    }
  }
}

// ── Report ────────────────────────────────────────────────────────────────────

if (violations.length === 0) {
  console.log('✓ check-todos: no violations found.')
  process.exit(0)
}

const icon   = isLaunched ? '✗' : '⚠'
const level  = isLaunched ? 'ERROR' : 'WARNING'
console.log(`\n${icon} check-todos ${level}: ${violations.length} violation(s) found\n`)
for (const v of violations) {
  console.log(`  ${v.file}:${v.line}  ${v.label}`)
}
console.log()

if (isLaunched) {
  console.log('Fix all violations before setting SITE_LAUNCHED=true.\n')
  process.exit(1)
} else {
  console.log('Set SITE_LAUNCHED=true to turn these warnings into build errors.\n')
}
