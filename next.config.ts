import type { NextConfig } from 'next'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

// Pin the workspace root to this project — /Users/admin/package-lock.json is
// an unrelated stray lockfile that otherwise makes Next.js infer the wrong root.
const projectRoot = dirname(fileURLToPath(import.meta.url))

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: false,
  images: {
    unoptimized: true,
  },
  outputFileTracingRoot: projectRoot,
}

export default nextConfig
