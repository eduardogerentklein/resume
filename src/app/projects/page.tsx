import { Loading } from '@/components'
import { getRepositories } from '@/api'
import { Suspense } from 'react'
import { GitHub } from 'react-feather'

export const metadata = {
  title: 'Eduardo Klein - Projects',
  description: `Eduardo's personal projects.`,
  referrer: 'origin-when-cross-origin',
  openGraph: {
    title: 'Eduardo Klein',
    description: `Eduardo's Portfolio - Projects`,
    url: 'https://eduardoklein.com',
    siteName: 'eduardoklein.com',
    images: [
      {
        url: 'https://eduardoklein.com/images/og-logo.png',
        width: 512,
        height: 512,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}

const Projects = async () => {
  const repositories = await getRepositories()

  return (
    <Suspense fallback={<Loading />}>
      <main className="flex flex-col gap-8">
        <h1 className="text-5xl font-bold text-gray-800 dark:text-gray-200">
          Hey there!
        </h1>
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
          This is a representation of my public repositories from GitHub.
        </h2>
        <section className="flex w-full flex-col flex-wrap items-center justify-start gap-8 md:flex-row">
          {repositories?.map((repo) => {
            return (
              <div
                key={repo.id}
                className="card card-flat group/card flex grow items-start gap-1 rounded border-gray-300 bg-gray-200 p-3 hover:border-gray-400 focus:border-gray-400 focus:outline-none dark:border-gray-700 dark:bg-gray-700 dark:hover:border-violet-400 dark:focus:border-violet-400"
              >
                <div className="flex w-full items-center justify-between gap-1">
                  <span className="font-bold capitalize text-gray-900 dark:text-yellow-300">
                    {repo.name}{' '}
                    {repo.homepage && (
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${repo.name} in live version`}
                        href={
                          repo.homepage.startsWith('https://')
                            ? repo.homepage
                            : `https://${repo.homepage}`
                        }
                      >
                        <small className="glow-text text-xs">LIVE </small>
                        {'🚀'}
                      </a>
                    )}
                  </span>
                  <small className="rounded-lg bg-gray-300 p-1 text-xs font-bold dark:bg-gray-500">
                    {repo.language}
                  </small>
                </div>
                <small className="text-sm">
                  {repo.description || 'No description available.'}
                </small>
                <button className="relative flex h-10 w-full items-center justify-center gap-2 rounded-lg bg-gray-300 px-3 transition-colors hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-offset-2 focus:ring-offset-violet-400 disabled:opacity-50 dark:bg-violet-500 dark:hover:bg-violet-400 md:absolute md:bottom-4 md:w-[calc(100%-1.5rem)]">
                  <a
                    target="_blank"
                    href={repo.html_url}
                    rel="noopener noreferrer"
                    aria-label={`View ${repo.name} repo on GitHub`}
                    className="flex h-full w-full items-center justify-center"
                  >
                    <GitHub className="mr-2 cursor-pointer" size={20} />
                    <span>View on GitHub</span>
                  </a>
                </button>
              </div>
            )
          })}
        </section>
      </main>
    </Suspense>
  )
}

export default Projects
