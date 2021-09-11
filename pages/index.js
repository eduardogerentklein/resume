import { DefaultSeo } from 'next-seo'
import Link from 'next/link'
import Head from 'next/head'

import Paragraph from '../components/Paragraph.js'
import Title from '../components/Title.js'
import configSeo from '../seo.json'

export default function About() {
  return (
    <>
      <DefaultSeo {...configSeo} />
      <Head>
        <title>Eduardo Gerent Klein - Interested in software development and always looking to learn about the best practices of software development.</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main>
        <Title>Hi, I'm Eduardo Gerent Klein</Title>
        <div className="mt-8 space-y-2">
          <Paragraph>
            I am a Software Engineer from Joinville, Brazil. 
            I studied Software Engineering at PUC - SC.
          </Paragraph>
          <Paragraph>
            I like to code, biking and hiking. Interested in software development and always looking to learn about the best practices of software development.
          </Paragraph>
          <Paragraph>
            This is where I write about me and share 
            <Link href="/resume">
              <a className="hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md p-1 dark:bg-gray-00">
                my resume.
              </a>
            </Link>
          </Paragraph>
        </div>
      </main>
    </>
  )
}