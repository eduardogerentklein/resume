'use client'

import { ReactNode } from 'react'
import { ThemeProvider } from 'next-themes'
import { Linkedin, GitHub } from 'react-feather'
import { Personal } from '@/data'

import { Footer, Navigation } from '@/components'
import { SocialMediaTypes } from '@/types'

interface LayoutProps {
  children: ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  const socialMediaIcons: SocialMediaTypes = {
    LinkedIn: <Linkedin className="cursor-pointer" size={20} />,
    GitHub: <GitHub className="cursor-pointer" size={20} />,
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <Navigation />
      <div className="mx-auto max-w-screen-lg px-4 md:px-0">{children}</div>
      <Footer>
        {Personal.links.map((link) => (
          <a
            key={link.name}
            target="_blank"
            href={link.href}
            rel="noopener noreferrer"
            className="glow-animation transition-colors"
            aria-label={`Eduardo's ${link.name}`}
          >
            {socialMediaIcons[link.name as keyof SocialMediaTypes]}
          </a>
        ))}
      </Footer>
    </ThemeProvider>
  )
}
