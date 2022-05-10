import { DefaultSeo } from 'next-seo'
import Link from 'next/link'
import Head from 'next/head'

import Paragraph from '../components/Paragraph.js'
import Title from '../components/Title.js'
import { Illustration } from '../components/Illustration.js'
import configSeo from '../seo.json'

export default function About() {
  return (
    <>
      <DefaultSeo {...configSeo} />
      <Head>
        <title>Eduardo Klein - Software Engineer 🐱‍💻</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main className="flex md:justify-between">
        <div>
          <Title>Hi, I'm Eduardo Klein</Title>
          <div className="mt-8 space-y-2">
            <Paragraph>
              I am a Software Engineer from Joinville, Brazil.
            </Paragraph>
            <Paragraph>
              I studied Software Engineering at PUC - SC. 
            </Paragraph>
            <Paragraph>
            I like coding, biking and hiking. 
            </Paragraph>
            <Paragraph>
              Interested in software development and always
            </Paragraph>
            <Paragraph>
              looking to learn about the best practices of SD.
            </Paragraph>
            <Paragraph>
              This is where I write about me and share 
              <Link href="/resume">
                <a className="hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md p-1 dark:bg-gray-00 transition-colors">
                  my resume.
                </a>
              </Link>
            </Paragraph>
          </div>
        </div>
        <Illustration name='programming' />
      </main>
    </>
  )
}