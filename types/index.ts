export interface NavItem {
  name: string
  href: string
}

export interface Position {
  type: "PhD Position" | "Postdoctoral Position"
  title: string
  description: string[]
  funding?: string
  contactEmail: string
}

export interface Quote {
  text: string
  author: string
}

export interface ResearchProject {
  objectives: any
  id: number
  title: string
  description: string
  image: string
}

export interface CarouselItem extends ResearchProject {}

export interface SearchableItem {
  title: string
  type: "Research" | "Page"
  href: string
}

export interface UsefulLink {
  name: string
  url: string
}

export interface UsefulLinksCategories {
  [key: string]: UsefulLink[]
}

export interface TeamMember {
  name: string
  role: string
  image: string
  description: string
}

export interface CategoryMembers {
  title: string
  members: TeamMember[]
}

export interface ResearchDetail {
  id: number
  title: string
  description: string
  image: string
  objectives: string[]
  methodology: string
  impact: string
}

export interface Publication {
  id: number
  title: string
  authors: string
  journal: string
  type: string
}
