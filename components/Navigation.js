import { Moon } from 'react-feather';

import Anchor from '../components/Anchor.js'
import Button from '../components/Button.js'

const Navigation = ({ anchors }) => {
  return (
    <nav className="flex items-center justify-between max-w-screen-lg mt-4 mx-4 md:mx-auto mb-16 px-6 py-3 rounded-md bg-gray-200">
      <div className="flex items-center space-x-4">
        {anchors.map((anchor, index) => (
          <Anchor key={index} route={anchor.route}>{anchor.name}</Anchor>
        ))}
      </div>
      <Button>
        <Moon />
      </Button>
    </nav>
  ) 
}

export default Navigation
