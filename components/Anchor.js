import Link from 'next/link'
import { useRouter } from 'next/router'

const Anchor = ({ route, children }) => {
  const router = useRouter()
  let className = "py-1 px-3 rounded-md text-gray-600 font-medium transition"

  if (router.pathname === route) {
    className = `${className} bg-gray-300 dark:bg-gray-700`
  }

  return (
    <Link href={ route }>
      <a className={className}>
        { children }
      </a>
    </Link>
  )
}

export default Anchor
