import { Suspense } from 'react'
import { Loading, Text } from '@/components'
import { getRepositories } from '@/api'
import { Repositories } from '@/types'
import ProjectList from './ProjectList'

export const metadata = {
  title: 'Eduardo Klein | Software Engineer',
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

const ProjectsPage = async () => {
  let repositories: Repositories[] = []
  let hasError = false

  try {
    repositories = await getRepositories()
  } catch (error) {
    hasError = true
  }

  return (
    <Suspense fallback={<Loading />}>
      <main className="flex flex-col gap-8">
        {hasError ? (
          <div className="text-red-600 dark:text-red-400 font-semibold">
            Failed to load projects. Please try again later.
          </div>
        ) : (
          <>
            <Text type="title">Projects</Text>
            <Text type="paragraph">
              Check out some of my recent projects. Each project showcases
              different skills and technologies.
            </Text>
            <ProjectList repositories={repositories} />
          </>
        )}
      </main>
    </Suspense>
  )
}

export default ProjectsPage
