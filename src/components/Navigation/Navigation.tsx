'use client'

import { useTheme } from 'next-themes'
import { Moon, Sun } from 'react-feather'

import { NavigationLinkOptions, NavLink } from '@/types'
import { Button, NavigationLink } from '@/components'

export const Navigation = ({ links }: NavigationLinkOptions) => {
  const { theme, setTheme } = useTheme()

  const handleClick = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <nav className="mx-4 mb-16 mt-4 flex max-w-screen-lg items-center justify-between rounded-md bg-gray-200 px-6 py-3 dark:bg-gray-800 dark:bg-opacity-50 md:mx-auto">
      <div className="flex items-center space-x-4">
        {links.map((link: NavLink, index: number) => (
          <NavigationLink key={index} route={link.route} name={link.name} />
        ))}
      </div>
      <Button onClick={handleClick}>
        {theme === 'dark' ? (
          <Moon className="transition-colors hover:text-yellow-300" />
        ) : (
          <Sun />
        )}
      </Button>
    </nav>
  )
}
