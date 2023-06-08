import { Button, ListItem, Text } from '@/components'

import {
  AlsoLike,
  Education,
  Experience,
  Knowledge,
  Language,
  LoveWork,
  Personal,
} from '@/data'

export const metadata = {
  title: 'Eduardo Klein - Resume 🐱‍👤',
  description: `Welcome to my Software Engineer portfolio website where you can 
  explore comprehensive information about my skill sets.`,
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
      <Text type="title">{Personal.title}</Text>
      <section className="mt-8">
        <div className="space-y-3">
          <Text type="paragraph">{Personal.name}</Text>
          <Text type="paragraph">{Personal.address}</Text>
          <Text type="paragraph">{Personal.email}</Text>
        </div>
        <div className="mt-3 flex flex-col">
          {Personal.links.map((link) => (
            <Button type="link" linkOptions={link} key={link.name} />
          ))}
        </div>
        <div className="mt-3 flex flex-col space-y-3">
          {Personal.personalIntros.map((personalIntro, index) => (
            <Text type="paragraph" key={index}>
              {personalIntro}
            </Text>
          ))}
        </div>
      </section>
      <section className="mt-8 flex flex-col">
        <Text type="subtitle">Education</Text>
        {Education.institutes.map((institute) => (
          <div key={institute.name}>
            <div className="mt-4 flex space-x-3">
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
      <section className="mt-8">
        <Text type="subtitle">{LoveWork.title}</Text>
        <div className="mt-4 flex space-x-3">
          <Text type="paragraph">{LoveWork.text}</Text>
        </div>
      </section>
      <section className="mt-8">
        <Text type="subtitle">{AlsoLike.title}</Text>
        <div className="mt-4 flex space-x-3">
          <Text type="paragraph">{AlsoLike.text}</Text>
        </div>
      </section>
      <section className="mt-8 flex flex-col">
        <Text type="subtitle">Knowledge</Text>
        {Knowledge.map((item) => (
          <div key={item.name} className="mt-4 flex flex-col space-y-3">
            <Text type="paragraph">
              {item.name}: <Text type="description">{item.description}</Text>
            </Text>
          </div>
        ))}
      </section>
      <section className="mt-8 flex flex-col">
        <Text type="subtitle">Experience</Text>
        {Experience.companies.map((company) => (
          <div key={company.name}>
            <div className="mt-4 flex space-x-3">
              <Text type="paragraph">
                {company.position}{' '}
                <Text type="description">
                  / {company.name} / {company.city}
                </Text>
              </Text>
            </div>
            <ul className="ml-10 mt-3 space-y-2">
              <ListItem>{company.companyDescription}</ListItem>
              {company.roleDescription && (
                <ListItem>{company.roleDescription}</ListItem>
              )}
              {company.techDescription && (
                <ListItem>{company.techDescription}</ListItem>
              )}
              <ListItem>{company.year}</ListItem>
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
    </main>
  )
}
