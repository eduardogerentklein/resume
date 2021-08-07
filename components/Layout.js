import { Twitter, Linkedin, GitHub } from 'react-feather'
import Link from 'next/link'
import { ThemeProvider } from 'next-themes'

import Navigation from './Navigation.js'
import Footer from './Footer.js'

const links = [
  { name: 'About', route: '/' },
  { name: 'Resume',	route: '/resume' }
]
const Layout = ({ children }) => (
  <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
    <Navigation links={links} />
    <div className="max-w-screen-md mx-auto px-4 md:px-8">
      { children }
    </div>
    <Footer>
      <Link href="https://www.github.com/eduardogerentklein">
        <GitHub className="cursor-pointer hover:text-gray-700" size={20} />
      </Link>
      <Link href="https://www.linkedin.com/in/eduardoklein/">
        <Linkedin className="cursor-pointer hover:text-gray-700" size={20} />
      </Link>
      <Link href="https://www.twitter.com/Klein1Eduardo">
        <Twitter className="cursor-pointer hover:text-gray-700" size={20} />
      </Link>
    </Footer>
  </ThemeProvider>
)

export default Layout
