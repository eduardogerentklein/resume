'use client'

import { ReactNode } from 'react'
import { ThemeProvider } from 'next-themes'
import { Twitter, Linkedin, GitHub } from 'react-feather'

import { Footer, Navigation } from '@/components'
import { Links } from '@/routes'

interface LayoutProps {
  children: ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <Navigation links={Links} />
      <div className="mx-auto max-w-screen-lg px-4 md:px-0">{children}</div>
      <Footer>
        <a
          target="_blank"
          href="https://www.github.com/eduardogerentklein"
          rel="noopener noreferrer"
          className="glow-animation transition-colors"
          aria-label={`Eduardo's GitHub`}
        >
          <GitHub className="cursor-pointer" size={20} />
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/eduardoklein/"
          rel="noopener noreferrer"
          className="glow-animation transition-colors"
          aria-label={`Eduardo's LinkedIn`}
        >
          <Linkedin className="cursor-pointer" size={20} />
        </a>
        <a
          target="_blank"
          href="https://www.twitter.com/Klein1Eduardo"
          rel="noopener noreferrer"
          className="glow-animation transition-colors"
          aria-label={`Eduardo's Twitter`}
        >
          <Twitter className="cursor-pointer" size={20} />
        </a>
      </Footer>
    </ThemeProvider>
  )
}
