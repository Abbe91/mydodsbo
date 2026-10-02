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

// --- fs.unlink (swallow EPERM on locked output files) ---
const _unlink = fs.unlink.bind(fs)
fs.unlink = function (p, cb) {
  _unlink(p, (err) => {
    if (err && (err.code === 'EPERM' || err.code === 'EACCES')) cb(null)
    else cb(err)
  })
}

const _unlinkSync = fs.unlinkSync.bind(fs)
fs.unlinkSync = function (p) {
  try { return _unlinkSync(p) }
  catch (e) { if (e.code === 'EPERM' || e.code === 'EACCES') return; throw e }
}

// --- fs.copyFile (swallow EPERM writing to locked dest) ---
const _copyFile = fs.copyFile.bind(fs)
fs.copyFile = function (src, dest, flags, cb) {
  if (typeof flags === 'function') { cb = flags; flags = 0 }
  _copyFile(src, dest, flags, (err) => {
    if (err && (err.code === 'EPERM' || err.code === 'EACCES')) cb(null)
    else cb(err)
  })
}

// --- fs.lstat / fs.lstatSync (swallow EPERM on output files) ---
// During "Collecting build traces", Next.js calls lstat on existing output
// files. Windows Defender may hold a lock immediately after creation, causing
// EPERM. Treat it as ENOENT so the trace step simply skips the locked file.
const _lstat = fs.lstat.bind(fs)
fs.lstat = function (p, opts, cb) {
  if (typeof opts === 'function') { cb = opts; opts = undefined }
  const done = cb || (() => {})
  if (opts !== undefined) {
    _lstat(p, opts, (err, s) => { if (err && err.code === 'EPERM') done(null, null); else done(err, s) })
  } else {
    _lstat(p, (err, s) => { if (err && err.code === 'EPERM') done(null, null); else done(err, s) })
  }
}

const _lstatSync = fs.lstatSync.bind(fs)
fs.lstatSync = function (p, opts) {
  try { return _lstatSync(p, opts) }
  catch (e) { if (e.code === 'EPERM') return null; throw e }
}

const _stat = fs.stat.bind(fs)
fs.stat = function (p, opts, cb) {
  if (typeof opts === 'function') { cb = opts; opts = undefined }
  const done = cb || (() => {})
  if (opts !== undefined) {
    _stat(p, opts, (err, s) => { if (err && err.code === 'EPERM') done(null, null); else done(err, s) })
  } else {
    _stat(p, (err, s) => { if (err && err.code === 'EPERM') done(null, null); else done(err, s) })
  }
}

const _statSync = fs.statSync.bind(fs)
fs.statSync = function (p, opts) {
  try { return _statSync(p, opts) }
  catch (e) { if (e.code === 'EPERM') return null; throw e }
}

// --- fs.promises (async/await variants used by Next.js 15 internally) ---
const fsp = fs.promises

const _pLstat = fsp.lstat.bind(fsp)
fsp.lstat = function (p, opts) {
  return _pLstat(p, opts).catch(e => { if (e.code === 'EPERM') return null; throw e })
}

const _pStat = fsp.stat.bind(fsp)
fsp.stat = function (p, opts) {
  return _pStat(p, opts).catch(e => { if (e.code === 'EPERM') return null; throw e })
}

const _pUnlink = fsp.unlink.bind(fsp)
fsp.unlink = function (p) {
  return _pUnlink(p).catch(e => { if (e.code === 'EPERM' || e.code === 'EACCES') return; throw e })
}

const _pRm = fsp.rm.bind(fsp)
fsp.rm = function (p, opts) {
  return _pRm(p, opts).catch(e => { if (e.code === 'EPERM' || e.code === 'EACCES') return; throw e })
}

const _pRmdir = fsp.rmdir.bind(fsp)
fsp.rmdir = function (p, opts) {
  return _pRmdir(p, opts).catch(e => {
    if (e.code === 'ENOTEMPTY' || e.code === 'EPERM' || e.code === 'EACCES') return
    throw e
  })
}

const _pCopyFile = fsp.copyFile.bind(fsp)
fsp.copyFile = function (src, dest, flags) {
  return _pCopyFile(src, dest, flags).catch(e => { if (e.code === 'EPERM' || e.code === 'EACCES') return; throw e })
}

const _pWriteFile = fsp.writeFile.bind(fsp)
fsp.writeFile = function (p, data, opts) {
  if (isTracePath(p)) return Promise.resolve()
  return _pWriteFile(p, data, opts).catch(e => { if (e.code === 'EPERM' || e.code === 'EACCES') return; throw e })
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
