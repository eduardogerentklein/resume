import { SkillBadge, Text } from '@/components'
import { Skills } from '@/data'

export const metadata = {
  title: 'Eduardo Klein | Software Engineer',
  description: `Eduardo's skills.`,
  referrer: 'origin-when-cross-origin',
  openGraph: {
    title: 'Eduardo Klein',
    description: `Eduardo's - Skills`,
    url: 'https://eduardoklein.com',
    siteName: 'eduardoklein.com',
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

const SkillsPage = () => {
  return (
    <main className="flex flex-col gap-8">
      <Text type="title">Skills</Text>
      <Text type="paragraph">
        I've worked with a variety of technologies and tools throughout my
        career.
      </Text>
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {Skills.map((skill) => (
          <div key={skill.name} className="flex flex-col gap-2 rounded-lg border border-primary p-6">
            <h3 className="text-xl text-primary font-bold">{skill.name}</h3>
            <div className="flex flex-wrap gap-2">
              {skill.technologies.map((technology) => (
                <SkillBadge key={technology} name={technology} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}

export default SkillsPage
