import Navigation from './Navigation.js'
import Footer from './Footer.js'

import { Twitter, Linkedin, GitHub } from 'react-feather'

import Link from 'next/link'
import { ThemeProvider } from 'next-themes'

const Layout = ({ children }) => {
	const anchors = [
		{ name: 'About', route: '/' },
		{ name: 'Resume',	route: '/resume' }
	]

  return (
    <ThemeProvider attribute="class">
			<Navigation anchors={anchors} />
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
}

export default Layout
