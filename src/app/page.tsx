import { Illustration, Text } from '@/components'
import Link from 'next/link'

export const metadata = {
  title: 'Eduardo Klein - Software Engineer 🐱‍💻',
  description: `Welcome to my Software Engineer portfolio website, 
    where I showcase my expertise and professional experience.`,
  referrer: 'origin-when-cross-origin',
  openGraph: {
    title: 'Eduardo Gerent Klein',
    description: 'Software Engineer',
    url: 'https://eduardoklein.com',
    siteName: 'eduardoklein',
    images: [
      {
        url: 'https://eduardoklein.com/og-logo.svg',
        width: 512,
        height: 512,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}

export default function Home() {
  return (
    <main className="flex md:justify-between">
      <div>
        <Text type="title">Hi, I&apos;m Eduardo Klein</Text>
        <div className="mt-8 space-y-2">
          <Text type="paragraph">
            I am a Software Engineer from Joinville, Brazil.
          </Text>
          <Text type="paragraph">
            Currently living in Auckland - New Zealand.
          </Text>
          <Text type="paragraph">
            I studied Software Engineering at PUC - SC.
          </Text>
          <Text type="paragraph">I like travel, nature and games.</Text>
          <Text type="paragraph">
            I am a passionate and dedicated Software Engineer with a
          </Text>
          <Text type="paragraph">
            strong background in developing innovative solutions
          </Text>
          <Text type="paragraph">
            This is where I write about me and share
            <Link
              href="/resume"
              className="dark:bg-gray-00 rounded-md p-1 transition-colors hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              my resume.
            </Link>
          </Text>
        </div>
      </div>
      <Illustration name="programming" />
    </main>
  )
}
