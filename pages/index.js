import Title from '../components/Title.js'
import Paragraph from '../components/Paragraph.js'

export default function About() {
  return (
    <main>
      <Title>Hi, I'm Eduardo Gerent Klein</Title>
      <div className="mt-8 space-y-2">
        <Paragraph>
          I am a developer, writer and sometimes streamer from Joinville, Brazil. 
          I studied Software Engineering at PUC - SC.
        </Paragraph>
        <Paragraph>
          Always building something (one day it will be a company). I like to code, 
          biking and running. Interested in design systems, a11y and JAMstack.
        </Paragraph>
        <Paragraph>
          This is where I write about the things I'm working on and share what I've learned.
        </Paragraph>
      </div>
    </main>
  )
}