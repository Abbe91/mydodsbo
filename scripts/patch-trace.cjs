/**
 * Windows Defender locks newly-created .next/trace files immediately after
 * creation, causing Next.js to crash with EPERM. This patch intercepts all
 * fs write operations for trace files and silently redirects them to NUL.
 *
 * Applied via NODE_OPTIONS="--require ./scripts/patch-trace.cjs" on Windows.
 * The script exits immediately on non-Windows platforms.
 */
if (process.platform !== 'win32') return

const fs = require('fs')
const path = require('path')

const NUL = '\\\\.\\NUL'

function isTracePath(p) {
  if (!p || typeof p !== 'string') return false
  const n = p.replace(/\\/g, '/')
  return n.endsWith('/.next/trace') || n.endsWith('/.build/trace')
}

// --- Async fs.open ---
const _open = fs.open.bind(fs)
fs.open = function (p, flags, ...rest) {
  return _open(isTracePath(p) ? NUL : p, flags, ...rest)
}

// --- Sync fs.openSync ---
const _openSync = fs.openSync.bind(fs)
fs.openSync = function (p, flags, ...rest) {
  return _openSync(isTracePath(p) ? NUL : p, flags, ...rest)
}

// --- fs.writeFile (async) ---
const _writeFile = fs.writeFile.bind(fs)
fs.writeFile = function (p, data, ...rest) {
  return _writeFile(isTracePath(p) ? NUL : p, data, ...rest)
}

// --- fs.writeFileSync ---
const _writeFileSync = fs.writeFileSync.bind(fs)
fs.writeFileSync = function (p, data, ...rest) {
  if (isTracePath(p)) return
  return _writeFileSync(p, data, ...rest)
}

// --- fs.appendFile (async) ---
const _appendFile = fs.appendFile.bind(fs)
fs.appendFile = function (p, data, ...rest) {
  return _appendFile(isTracePath(p) ? NUL : p, data, ...rest)
}

// --- fs.appendFileSync ---
const _appendFileSync = fs.appendFileSync.bind(fs)
fs.appendFileSync = function (p, data, ...rest) {
  if (isTracePath(p)) return
  return _appendFileSync(p, data, ...rest)
}

// --- fs.createWriteStream ---
const _createWriteStream = fs.createWriteStream.bind(fs)
fs.createWriteStream = function (p, opts) {
  return _createWriteStream(isTracePath(p) ? NUL : p, opts)
}

// --- fs.rmdir / fs.rmdirSync (catch ENOTEMPTY on distDir) ---
const _rmdir = fs.rmdir.bind(fs)
fs.rmdir = function (p, opts, cb) {
  if (typeof opts === 'function') { cb = opts; opts = {} }
  _rmdir(p, opts, (err) => {
    if (err && err.code === 'ENOTEMPTY') cb(null)
    else cb(err)
  })
}

const _rmdirSync = fs.rmdirSync.bind(fs)
fs.rmdirSync = function (p, opts) {
  try { return _rmdirSync(p, opts) }
  catch (e) { if (e.code !== 'ENOTEMPTY') throw e }
}
