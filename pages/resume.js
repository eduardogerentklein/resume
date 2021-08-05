import Title from '../components/Title.js'
import Subtitle from '../components/Subtitle.js'
import Paragraph from '../components/Paragraph.js'
import Description from '../components/Description.js'
import LinkButton from '../components/LinkButton.js'
import ListItem from '../components/ListItem.js'

import Head from 'next/head'

import language from '../data/language'
import personal from '../data/personal'
import education from '../data/education'
import experience from '../data/experience'
import knowledge from '../data/knowledge'
import loveWork from '../data/loveWork'
import alsoLike from '../data/alsoLike'

export default function Resume() {
  return (
    <>
      <Head>
        <title>Eduardo Gerent Klein - Resume</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main>
        <Title>{personal.title}</Title>
        <section className="mt-8">
          <div className="space-y-3">
            <Paragraph>{personal.name}</Paragraph>
            <Paragraph>{personal.address}</Paragraph>
            <Paragraph>{personal.email}</Paragraph>
          </div>
          <div className="flex flex-col mt-3">
            {personal.links.map(link => (
              <LinkButton link={link} />
            ))}
          </div>
          <div className="flex flex-col mt-3 space-y-3">
            {personal.personalIntros.map((personalIntro, index) => (
              <Paragraph key={index}>{personalIntro}</Paragraph>
            ))}
          </div>
        </section>
        <section className="flex flex-col mt-8">
          <Subtitle>Education</Subtitle>
          {education.institutes.map((institute, index) => (
            <>
              <div key={institute.name} className="flex mt-4 space-x-3">
                <Paragraph>{institute.name}</Paragraph>
                <Paragraph>{institute.city}</Paragraph>
              </div>
              <ul key={institute.course} className="space-y-2 mt-3 ml-10">
                <ListItem>{institute.course}</ListItem>
                <ListItem>{institute.year}</ListItem>
              </ul>
            </>
          ))}
        </section>
        <section className="mt-8">
          <Subtitle>{loveWork.title}</Subtitle>
          <div className="flex mt-4 space-x-3">
            <Paragraph>{loveWork.text}</Paragraph>
          </div>
        </section>
        <section className="mt-8">
          <Subtitle>{alsoLike.title}</Subtitle>
          <div className="flex mt-4 space-x-3">
            <Paragraph>{alsoLike.text}</Paragraph>
          </div>
        </section>
        <section className="flex flex-col mt-8">
          <Subtitle>Knowledge</Subtitle>
          {knowledge.knowledges.map(item => (
            <div key={item.name} className="flex flex-col mt-4 space-y-3">
              <Paragraph>{item.name}: <Description>{item.description}</Description></Paragraph>
            </div>
          ))}
        </section>
        <section className="flex flex-col mt-8">
          <Subtitle>Experience</Subtitle>
          {experience.companies.map((company, index) => (
            <>
              <div key={company.name} className="flex mt-4 space-x-3">
                <Paragraph>{company.position} <Description>/ {company.name} / {company.city}</Description></Paragraph>
              </div>
              <ul key={company.companyDescription} className="space-y-2 mt-3 ml-10">
                <ListItem>{company.companyDescription}</ListItem>
                <ListItem>{company.year}</ListItem>
              </ul>
            </>
          ))}
        </section>
        <section className="flex flex-col mt-8">
          <Subtitle>Language</Subtitle>
          {language.languages.map(item => (
            <div key={item.name} className="flex flex-col mt-4 space-y-3">
              <Paragraph>{item.name}: <Description>{item.description}</Description></Paragraph>
            </div>
          ))}
        </section>
      </main>
    </>
  )
}
