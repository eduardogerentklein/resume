import { Twitter, Linkedin, GitHub } from 'react-feather'
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
      <a target="_blank" href="https://www.github.com/eduardogerentklein" rel="noopener noreferrer" className="glow-animation">
        <GitHub className="cursor-pointer" size={20} />
      </a>
      <a target="_blank" href="https://www.linkedin.com/in/eduardoklein/" rel="noopener noreferrer" className="glow-animation">
        <Linkedin className="cursor-pointer" size={20} />
      </a>
      <a target="_blank" href="https://www.twitter.com/Klein1Eduardo" rel="noopener noreferrer" className="glow-animation">
        <Twitter className="cursor-pointer" size={20} />
      </a>
    </Footer>
  </ThemeProvider>
)

export default Layout
