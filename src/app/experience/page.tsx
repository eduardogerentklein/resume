import { Text } from '@/components'
import ExperienceList from './ExperienceList'

export const metadata = {
  title: 'Eduardo Klein | Software Engineer',
  description: `Welcome to my Software Engineer portfolio website where you can 
  explore information about my skills and experiences.`,
  referrer: 'origin-when-cross-origin',
  openGraph: {
    title: 'Eduardo Klein',
    description: `Eduardo's Portfolio - Resume`,
    url: 'https://eduardoklein.com',
    siteName: 'eduardoklein',
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

export default function Resume() {
  return (
    <main>
      <Text type="title">Eduardo's Experience</Text>
      <section className="mt-8 flex flex-col">
        <div className="relative ml-4 border-l-2 border-primary-hover">
          <ExperienceList />
        </div>
      </section>
    </main>
  )
}
