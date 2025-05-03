'use client'

import { ListItem, Text } from '@/components'
import { Experience } from '@/data'
import { motion } from 'framer-motion'

export const metadata = {
  title: 'Eduardo Klein | Software Engineer',
  description: `Welcome to my Software Engineer portfolio website where you can 
  explore information about my skill sets.`,
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
          {Experience.companies.map((exp, index) => (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="relative ml-4 gap-3"
            >
              <div className="absolute -left-6 top-1.5 h-3 w-3 rounded-full border-2 border-primary bg-primary shadow" />
              <h3 className="text-lg font-semibold text-primary sm:text-base">
                {exp.position} / {exp.name} / {exp.city} - {exp.year}
              </h3>
              <ul className="ml-8 my-3 space-y-2">
                <ListItem>{exp.basicDescription}</ListItem>
                {exp.roleDescription && (
                  <ListItem>{exp.roleDescription}</ListItem>
                )}
                {exp.additionalDescription && (
                  <ListItem>{exp.additionalDescription}</ListItem>
                )}
                {exp.techDescription && (
                  <ListItem>{exp.techDescription}</ListItem>
                )}
              </ul>
            </motion.div>
          ))}
        </div>
        {/* {Experience.companies.map((company) => (
          <div key={company.name}>
            <div className="mt-4 flex space-x-3">
              <Text type="paragraph">
                {company.position}{' '}
                <Text type="description">
                  / {company.name} / {company.city} - <b>{company.year}</b>
                </Text>
              </Text>
            </div>
            <ul className="ml-10 mt-3 space-y-2">
              <ListItem>{company.basicDescription}</ListItem>
              {company.roleDescription && (
                <ListItem>{company.roleDescription}</ListItem>
              )}
              {company.additionalDescription && (
                <ListItem>{company.additionalDescription}</ListItem>
              )}
              {company.techDescription && (
                <ListItem>{company.techDescription}</ListItem>
              )}
            </ul>
          </div>
        ))} */}
      </section>
    </main>
  )
}
