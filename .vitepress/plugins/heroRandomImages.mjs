import { existsSync, readdirSync, statSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { relative, resolve, sep } from 'node:path'

const VIRTUAL_MODULE_ID = 'virtual:hero-random-images'
const RESOLVED_VIRTUAL_MODULE_ID = `\0${VIRTUAL_MODULE_ID}`
const HERO_RANDOM_DIR = fileURLToPath(new URL('../../public/hero-random', import.meta.url))
const IMAGE_EXTENSIONS = new Set(['.png', '.jpg', '.jpeg', '.webp', '.avif', '.gif', '.svg'])

function collectImageFiles(directory) {
  if (!existsSync(directory))
    return []

  const results = []

  for (const entry of readdirSync(directory)) {
    const absolutePath = resolve(directory, entry)
    const stats = statSync(absolutePath)

    if (stats.isDirectory()) {
      results.push(...collectImageFiles(absolutePath))
      continue
    }

    const extension = entry.slice(entry.lastIndexOf('.')).toLowerCase()
    if (IMAGE_EXTENSIONS.has(extension))
      results.push(absolutePath)
  }

  return results
}

function getHeroRandomImages() {
  return collectImageFiles(HERO_RANDOM_DIR)
    .sort((left, right) => left.localeCompare(right, 'zh-CN'))
    .map((absolutePath) => {
      const encodedPath = relative(HERO_RANDOM_DIR, absolutePath)
        .split(sep)
        .map(segment => encodeURIComponent(segment))
        .join('/')

      return `/hero-random/${encodedPath}`
    })
}

function invalidateVirtualModule(server) {
  const module = server.moduleGraph.getModuleById(RESOLVED_VIRTUAL_MODULE_ID)
  if (module)
    server.moduleGraph.invalidateModule(module)

  server.ws.send({ type: 'full-reload' })
}

export function heroRandomImagesPlugin() {
  return {
    name: 'maayuan:hero-random-images',
    resolveId(id) {
      if (id === VIRTUAL_MODULE_ID)
        return RESOLVED_VIRTUAL_MODULE_ID
    },
    load(id) {
      if (id !== RESOLVED_VIRTUAL_MODULE_ID)
        return

      return [
        `export const heroRandomImages = ${JSON.stringify(getHeroRandomImages(), null, 2)}`,
        'export default heroRandomImages',
      ].join('\n')
    },
    configureServer(server) {
      server.watcher.add(HERO_RANDOM_DIR)
    },
    handleHotUpdate(context) {
      if (!context.file.startsWith(HERO_RANDOM_DIR))
        return

      invalidateVirtualModule(context.server)
      return []
    },
  }
}
