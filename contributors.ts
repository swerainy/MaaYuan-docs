import contributors from './contributors.json'

export interface Contributor {
  name: string
  avatar: string
  github?: string
}

interface ContributorInput {
  name: string
  avatar?: string
  github?: string
}

function getGithubAvatarUrl(name: string) {
  return `https://github.com/${name}.png`
}

function getFallbackAvatarUrl(name: string) {
  const initial = name.trim().charAt(0).toUpperCase() || '?'
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="32" fill="#cbd5e1"/><text x="50%" y="50%" dominant-baseline="central" text-anchor="middle" font-family="Arial, sans-serif" font-size="28" fill="#334155">${initial}</text></svg>`
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`
}

function normalizeContributor(input: string | ContributorInput): Contributor {
  if (typeof input === 'string') {
    return {
      name: input,
      github: input,
      avatar: getGithubAvatarUrl(input),
    }
  }

  const github = input.github?.trim() || undefined

  return {
    name: input.name,
    github,
    avatar: input.avatar?.trim() || (github ? getGithubAvatarUrl(github) : getFallbackAvatarUrl(input.name)),
  }
}

const contributorList = (contributors as Array<string | ContributorInput>).map(normalizeContributor)

export { contributorList as contributors }
