import Title from '../components/Title.js'
import Subtitle from '../components/Subtitle.js'
import Paragraph from '../components/Paragraph.js'
import Description from '../components/Description.js'
import ListItem from '../components/ListItem.js'

import Head from 'next/head'
import Link from 'next/link'

export default function Resume() {
  const personal = {
    "title": "Eduardo's Resume",
    "name": "Eduardo Gerent Klein",
    "address": "Joinville, SC, Brazil",
    "email": "eduardo.gklein@gmail.com",
    "links": [
      {
        "name": "LinkedIn",
        "href": "https://www.linkedin.com/in/eduardoklein",
        "description": null
      },
      {
        "name": "Github",
        "href": "https://www.github.com/eduardogerentklein",
        "description":  null
      }
    ],
    "personalIntros": [
      "I have a experience ranging VueJS, AngularJS, to doing stuffs in backend with C#.",
      "I'm interested in design systems, a11y, JAMstack, core engineering, UX/DX and good environments (folks)."
    ]
  }

  const education = {
    "title": "Education",
    "institutes": [
      {
        "name": "Centro Universitário - Católica de Santa Catarina",
        "city": "Joinville, SC, Brazil",
        "course": "Software Engineering",
        "year": "2017 / 2021"
      }
    ]
  }

  const experience = {
    "title": "Experience",
    "companies": [
      {
        "name": "Docspider Software S.A",
        "city": "Joinville, SC, Brazil",
        "position": "Full stack Developer",
        "year": "2018 / 2020",
        "companyDescription": `Docspider is a consolidated company specializing in technologies and 
          services for regulatory governance, compliance, document management, etc.`
      },
      {
        "name": "Fulltech LTDA",
        "city": "Joinville, SC, Brazil",
        "position": "Full stack Developer",
        "year": "2020 / current",
        "companyDescription": `Fulltech is a Fintech focused on the development and
         application of financial solutions for companies and entrepreneurs.`
      }
    ]
  }

  const knowledge = {
    "knowledges": [
      {
        "name": "Languages",
        "description": "Javascript, C#, C++, C"
      },
      {
        "name": "Databases",
        "description": "SQL Server"
      },
      {
        "name": "Libs / Frameworks",
        "description": "ReactJS, Nextjs, VueJS, Vuetify, Vuex, NodeJS, .NET Framework, .NET Core"
      },
      {
        "name": "Platforms and Tools",
        "description": "AWS (Lambda, S3) Git, Heroku, Azure"
      },
      {
        "name": "Others",
        "description": "CI/CD, APIs REST, Scrum, Kanban, Robotic, Arduino"
      }
    ] 
  }

  const language = {
    "languages": [
      {
        "name": "Portuguese",
        "description": "Native"
      },
      {
        "name": "English",
        "description": "intermediary r/w"
      }
    ] 
  }

  const loveWork = {
    "title": "Love working with",
    "text": "Front end development, design systems, UI components, a11y, performance first, JAMstack, UX principles, CI/CD"
  }

  const alsoLike = {
    "title": "Also Like",
    "text": "Full stack development"
  }

  return (
    <>
      <Head>
        <title>Eduardo Gerent Klein - Resume</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main>
        <Title>{personal.title}</Title>
        <section className="mt-10">
          <div className="space-y-3">
            <Paragraph>{personal.name}</Paragraph>
            <Paragraph>{personal.address}</Paragraph>
            <Paragraph>{personal.email}</Paragraph>
          </div>
          <div className="flex flex-col mt-6 space-y-3">
            {personal.links.map((link, index) => (
              <div key={index} className="flex items-center space-x-1">
                <Link href={link.href}>
                  <a className="hover:bg-gray-200 rounded-md p-2 dark:bg-gray-00">
                    <Paragraph>{link.name}</Paragraph>
                  </a>
                </Link>
                {link.description && <Description>{link.description}</Description>}
              </div>
            ))}
          </div>
          <div className="flex flex-col mt-6 space-y-2">
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
        <section className="mt-10">
          <Subtitle>{loveWork.title}</Subtitle>
          <div className="flex mt-4 space-x-3">
            <Paragraph>{loveWork.text}</Paragraph>
          </div>
        </section>
        <section className="mt-10">
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
