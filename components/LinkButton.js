import Link from 'next/link'

import Paragraph from '../components/Paragraph.js'
import Description from '../components/Description.js'

const LinkButton = ({ link }) => (
  <div className="flex items-center space-x-1">
    <a target="_blank" href={link.href} rel="noopener noreferrer" className="hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md p-2 dark:bg-gray-00">
      <Paragraph>{link.name}</Paragraph>
    </a>
    {link.description && <Description>{link.description}</Description>}
  </div>
)

export default LinkButton