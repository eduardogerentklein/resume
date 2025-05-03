'use client'

import { ListItem } from '@/components'
import { Experience } from '@/data'
import { motion } from 'framer-motion'

const ExperienceList = () => {
  return (
    <>
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
    </>
  )
}

export default ExperienceList