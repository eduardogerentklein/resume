import { useTheme } from 'next-themes'
import { Moon, Sun } from 'react-feather'

import NavigationLink from '../components/NavigationLink.js'
import Button from '../components/Button.js'

const Navigation = ({ links }) => {
  const { theme, setTheme } = useTheme()

  const onClick = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <nav className="flex items-center justify-between max-w-screen-lg mt-4 mx-4 md:mx-auto mb-16 px-6 py-3 rounded-md bg-gray-200 dark:bg-gray-800 dark:bg-opacity-50">
      <div className="flex items-center space-x-4">
        {links.map((link, index) => (
          <NavigationLink key={index} route={link.route}>{link.name}</NavigationLink>
        ))}
      </div>
      <Button onClick={onClick}>
        {theme === 'dark' ? <Moon /> : <Sun />}
      </Button>
    </nav>
  ) 
}

export default Navigation
