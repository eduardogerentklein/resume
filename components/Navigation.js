import Anchor from '../components/Anchor.js'
import Button from '../components/Button.js'

import { useState } from 'react'
import { useTheme } from 'next-themes'

import { Moon } from 'react-feather';
import { Sun } from 'react-feather';

const Navigation = ({ anchors }) => {
  const [darkMode, setDarkMode] = useState(false);
  const { theme, setTheme } = useTheme()
  const onClick = () => {
    setDarkMode(!darkMode)
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }
  return (
    <nav className="flex items-center justify-between max-w-screen-lg mt-4 mx-4 md:mx-auto mb-16 px-6 py-3 rounded-md bg-gray-200 dark:bg-gray-800 dark:bg-opacity-50">
      <div className="flex items-center space-x-4">
        {anchors.map((anchor, index) => (
          <Anchor key={index} route={anchor.route}>{anchor.name}</Anchor>
        ))}
      </div>
      <Button onClick={onClick}>
        {darkMode ? (<Sun />) : (<Moon />)}
      </Button>
    </nav>
  ) 
}

export default Navigation
