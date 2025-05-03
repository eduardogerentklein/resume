import { Illustration, ListItem, Text } from '@/components'
import { Education, Language } from '@/data'
import Link from 'next/link'

export const metadata = {
  metadataBase: new URL('https://eduardoklein.com'),
  title: 'Eduardo Klein | Software Engineer',
  description: `Welcome to my Software Engineer portfolio website, 
    where I showcase my expertise and professional experience.`,
  referrer: 'origin-when-cross-origin',
  openGraph: {
    title: 'Eduardo Klein',
    description: `Eduardo's Portfolio - About`,
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

export default function Home() {
  return (
    <main className="flex md:justify-between">
      <div>
        <Text type="title">Hi, I&apos;m Eduardo Klein</Text>
        <div className="mt-8 space-y-2">
          <Text type="paragraph">
            Software Engineer with 6+ years of experience / Based in Auckland, New Zealand
          </Text>
          <Text type='paragraph'>
            Passionate about clean code, modern frameworks, APIs, cloud technologies, 
            collaborative development, and continuous improvement.
          </Text>
          <Text type="paragraph">
            <Link
              href="/experience"
              className="dark:bg-gray-800 rounded-md p-1 transition-colors hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              Check out my experiences{' '}
            </Link>
          </Text>
        </div>
        <section className="mt-8 flex flex-col">
          <Text type="subtitle">Education</Text>
          {Education.institutes.map((institute) => (
            <div key={institute.name} className="mt-4 flex flex-col space-y-3">
              <div className="flex space-x-3">
                <Text type="paragraph">{institute.name}</Text>
                <Text type="paragraph">{institute.city}</Text>
              </div>
              <ul className="ml-10 mt-3 space-y-2">
                <ListItem>{institute.course}</ListItem>
                <ListItem>{institute.year}</ListItem>
              </ul>
            </div>
          ))}
        </section>
        <section className="mt-8 flex flex-col">
          <Text type="subtitle">Language</Text>
          {Language.languages.map((item) => (
            <div key={item.name} className="mt-4 flex flex-col space-y-3">
              <Text type="paragraph">
                {item.name}: <Text type="description">{item.description}</Text>
              </Text>
            </div>
          ))}
        </section>
      </div>
      <Illustration name="programming" />
    </main>
  )
}
