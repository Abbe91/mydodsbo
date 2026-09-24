#!/usr/bin/env node
/**
 * Appends X-Robots-Tag: noindex to out/_headers when Netlify is building
 * a deploy-preview or branch-deploy context.
 */
import { appendFileSync, existsSync } from 'fs'
import { join, resolve } from 'path'

const context = process.env.CONTEXT ?? ''
const previewContexts = ['deploy-preview', 'branch-deploy']

if (previewContexts.includes(context)) {
  const headersFile = join(resolve('.'), 'out', '_headers')
  const rule = '\n/*\n  X-Robots-Tag: noindex\n'
  appendFileSync(headersFile, rule, 'utf-8')
  console.log(`postbuild: wrote X-Robots-Tag: noindex to out/_headers (context=${context})`)
} else {
  console.log(`postbuild: skipped X-Robots-Tag (context="${context || 'production'}")`)
}
