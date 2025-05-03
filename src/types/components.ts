import { ReactElement } from "react"

export type ButtonLinkOptions = {
  href: string
  name: string
  description: string
}

export type NavLink = {
  route: string
  name: string
}

export type SocialMediaTypes = {
  GitHub: ReactElement
  LinkedIn: ReactElement
}