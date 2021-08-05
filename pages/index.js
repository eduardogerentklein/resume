import Title from '../components/Title.js'
import Paragraph from '../components/Paragraph.js'
import Link from 'next/link'

import Head from 'next/head'

export default function About() {
  return (
    <>
      <Head>
        <title>Eduardo Gerent Klein - Interested in design systems, design patterns and JAMstack.</title>
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
            I like to code, biking and hiking. I'm interested in design systems, a11y and JAMstack.
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