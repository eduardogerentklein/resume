import Link from 'next/link'
import Paragraph from '../components/Paragraph.js'
import Description from '../components/Description.js'

const LinkButton = ({ link }) => (
  <div key={link.name} className="flex items-center space-x-1">
    <Link href={link.href}>
      <a className="hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md p-2 dark:bg-gray-00">
        <Paragraph>{link.name}</Paragraph>
      </a>
    </Link>
    {link.description && <Description>{link.description}</Description>}
  </div>
)

export default LinkButton