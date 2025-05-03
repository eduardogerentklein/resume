'use client'

import { Repositories } from '@/types'
import { ExternalLink, GitHub } from 'react-feather'

const isValidUrl = (url: string) => {
  try {
    new URL(url)
    return true
  } catch {
    return false
  }
}

interface ProjectListProps {
  repositories: Repositories[]
}

const ProjectList = ({ repositories }: ProjectListProps) => {
  if (!repositories?.length) {
    return <p className="text-gray-500">No repositories available.</p>
  }

  return (
    <section className="flex w-full flex-col flex-wrap items-center justify-start gap-8 md:flex-row">
      {repositories.map((repo) => {
        const homepageUrl = repo.homepage?.startsWith('https://')
          ? repo.homepage
          : `https://${repo.homepage}`

        return (
          <div
            key={repo.id}
            className="card card-flat group/card flex grow items-start gap-1 rounded border-gray-300 bg-gray-200 p-3 hover:border-gray-400 focus:border-gray-400 focus:outline-none dark:border-gray-700 dark:bg-gray-700 dark:hover:border-primary dark:focus:border-primary"
          >
            <div className="flex w-full items-center justify-between gap-1">
              <span className="flex gap-1 font-bold capitalize text-gray-900 dark:text-primary">
                {repo.name}{' '}
                {repo.homepage && isValidUrl(homepageUrl) && (
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${repo.name} live version`}
                    className=''
                    href={homepageUrl} 
                  >
                    <ExternalLink size={20} />
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
            <a
              target="_blank"
              href={repo.html_url}
              rel="noopener noreferrer"
              aria-label={`View ${repo.name} repo on GitHub`}
              className="relative flex h-10 w-full items-center justify-center gap-2 rounded-lg bg-primary px-3 transition-colors hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-primary disabled:opacity-50 dark:bg-primary dark:hover:bg-primary-hover md:absolute md:bottom-4 md:w-[calc(100%-1.5rem)]"
            >
              <GitHub className="mr-2 cursor-pointer text-primary-foreground" size={20} />
              <span className='text-primary-foreground'>View on GitHub</span>
            </a>
          </div>
        )
      })}
    </section>
  )
}

export default ProjectList
