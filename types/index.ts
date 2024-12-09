
export interface Link {
  name: string;
  url: string;
}

// Define the type for the usefulLinks object
export interface UsefulLinksData {
  "Academic Resources": Link[];
  "Research Tools": Link[];
  "Professional Organizations": Link[];
  "Partner Institutions": Link[];
  "Funding Organizations": Link[];
}

export interface ResearchCarouselData {
  id: number
  title: string
  description: string
  image: string
}
