import {
  NavItem,
  Position,
  Quote,
  ResearchProject,
  CarouselItem,
  SearchableItem,
  UsefulLinksCategories,
  CategoryMembers,
  TeamMember,
  ResearchDetail,
  Publication
} from "@/types"

export const navItems: NavItem[] = [
  { name: "Contact", href: "contact" },
  { name: "Links", href: "links" },
  { name: "Members", href: "members" },
  { name: "Openings", href: "openings" },
  { name: "Publications", href: "publications" },
  { name: "Research", href: "research" }
]

export const positions: Position[] = [
  {
    type: "PhD Position",
    title: "Space-Time Metamaterials (2 positions)",
    description: [
      "Research focus on novel space-time metamaterial designs",
      "Strong background in electromagnetics required",
      "Programming skills (Python, MATLAB) preferred"
    ],
    funding: "Full funding for 4 years",
    contactEmail: "research@kuleuven.be"
  },
  {
    type: "PhD Position",
    title: "Quantum Metamaterials (1 position)",
    description: [
      "Focus on quantum effects in metamaterials",
      "Background in quantum mechanics and electromagnetics",
      "Computational skills required"
    ],
    funding: "Full funding for 4 years",
    contactEmail: "research@kuleuven.be"
  },
  {
    type: "Postdoctoral Position",
    title: "Senior Researcher in Electromagnetic Theory",
    description: [
      "2-year position with possibility of extension",
      "Leading research in theoretical electromagnetics",
      "Publication track record required",
      "Competitive salary package"
    ],
    contactEmail: "research@kuleuven.be"
  }
]

export const quotes: Quote[] = [
  {
    text: "Every block of stone has a statue inside it and it is the task of the sculptor to discover it.",
    author: "Michelangelo"
  },
  {
    text: "Research is to see what everybody else has seen, and to think what nobody else has thought.",
    author: "Albert Szent-Györgyi"
  },
  {
    text: "The important thing is not to stop questioning. Curiosity has its own reason for existence.",
    author: "Albert Einstein"
  }
]

export const heroImages: string[] = ["/img/pic7.jpg", "/img/pic6.jpg"]

export const research: ResearchProject[] = [
  {
    id: 1,
    title: "Advanced Electromagnetic Metamaterials",
    description:
      "This research focuses on the development of advanced electromagnetic metamaterials that can manipulate light and electromagnetic waves in novel ways. These materials enable groundbreaking applications in communication, sensing, and energy harvesting. Our team is exploring new designs and fabrication techniques to create metamaterials with unprecedented properties, such as negative refractive index and perfect absorption.",
    image: "/research/pic1.jpg"
  },
  {
    id: 2,
    title: "Quantum Computing for Electromagnetic Applications",
    description:
      "Our research investigates the use of quantum computing techniques for simulating complex electromagnetic fields, pushing the limits of computational efficiency and accuracy. We are developing quantum algorithms that can solve electromagnetic problems exponentially faster than classical computers, opening up new possibilities in antenna design, radar systems, and wireless communications.",
    image: "/research/pic2.jpg"
  },
  {
    id: 3,
    title: "Wireless Power Transfer through Metamaterials",
    description:
      "This project explores how electromagnetic metamaterials can enhance wireless power transfer systems, improving efficiency and reducing losses in applications like electric vehicle charging and IoT devices. We are designing and testing novel metamaterial structures that can focus and guide electromagnetic energy, potentially revolutionizing how we power our devices and vehicles.",
    image: "/research/pic3.jpg"
  },
  {
    id: 4,
    title: "Smart Antennas for 5G Networks",
    description:
      "We are designing smart antennas optimized for 5G networks, which will provide enhanced coverage, reduced interference, and faster data transmission, paving the way for next-generation mobile communication. Our research includes the development of massive MIMO systems, beamforming techniques, and adaptive antenna arrays that can significantly improve the capacity and reliability of 5G networks.",
    image: "/research/pic4.jpg"
  },
  {
    id: 5,
    title: "Metasurfaces for Medical Imaging",
    description:
      "This research explores the use of electromagnetic metasurfaces to improve medical imaging techniques such as MRI and ultrasound, offering the potential for higher resolution and reduced scanning times. We are investigating how carefully designed metasurfaces can manipulate electromagnetic waves to enhance image quality, increase depth penetration, and enable new imaging modalities that were previously impossible.",
    image: "/research/pic5.jpg"
  }
]

export const researchCarousel: CarouselItem[] = [
  {
    id: 1,
    title: "Quantum Computing Research",
    description:
      "Exploring the frontiers of quantum computation and its applications in cryptography.",
    image: "/carousel/pic1.jpg"
  },
  {
    id: 2,
    title: "AI & Machine Learning",
    description:
      "Pushing the boundaries of artificial intelligence and neural networks.",
    image: "/carousel/pic2.jpg"
  },
  {
    id: 3,
    title: "RF Design",
    description: "Advanced radio frequency circuit design and optimization.",
    image: "/carousel/pic3.jpg"
  },
  {
    id: 4,
    title: "High-Frequency Devices",
    description: "Development of cutting-edge electromagnetic components.",
    image: "/carousel/pic4.jpg"
  },
  {
    id: 5,
    title: "Metasurfaces",
    description: "Revolutionary electromagnetic wave manipulation techniques.",
    image: "/carousel/pic5.jpg"
  }
]

export const searchableContent: SearchableItem[] = [
  { title: "Quantum Computing Research", type: "Research", href: "#quantum" },
  { title: "Advanced Materials Science", type: "Research", href: "#materials" },
  { title: "Publications Archive", type: "Page", href: "#publications" },
  { title: "Research Team", type: "Page", href: "#team" },
  { title: "Contact Information", type: "Page", href: "#contact" },
  { title: "Latest News", type: "Page", href: "#news" }
]

export const usefulLinks: UsefulLinksCategories = {
  "Academic Resources": [
    { name: "KU Leuven Libraries", url: "https://bib.kuleuven.be/english" },
    { name: "IEEE Xplore Digital Library", url: "https://ieeexplore.ieee.org" },
    { name: "Science Direct", url: "https://www.sciencedirect.com" },
    { name: "arXiv", url: "https://arxiv.org" }
  ],
  "Research Tools": [
    { name: "COMSOL Multiphysics", url: "https://www.comsol.com" },
    { name: "MATLAB", url: "https://www.mathworks.com" },
    {
      name: "CST Studio Suite",
      url: "https://www.3ds.com/products-services/simulia/products/cst-studio-suite"
    }
  ],
  "Professional Organizations": [
    { name: "IEEE", url: "https://www.ieee.org" },
    { name: "OSA - The Optical Society", url: "https://www.osa.org" },
    { name: "SPIE", url: "https://spie.org" }
  ],
  "Partner Institutions": [
    { name: "MIT", url: "https://www.mit.edu" },
    { name: "ETH Zurich", url: "https://ethz.ch/en.html" },
    { name: "Stanford University", url: "https://www.stanford.edu" },
    { name: "Imperial College London", url: "https://www.imperial.ac.uk" }
  ],
  "Funding Organizations": [
    { name: "European Research Council", url: "https://erc.europa.eu" },
    { name: "FWO - Research Foundation Flanders", url: "https://www.fwo.be" },
    {
      name: "Marie Skłodowska-Curie Actions",
      url: "https://ec.europa.eu/research/mariecurieactions"
    }
  ]
}

export const leaders: TeamMember[] = [
  {
    name: "Prof. Dr. John Smith",
    role: "Principal Investigator",
    image: "/members/pic1.jpg",
    description:
      "Leading research in electromagnetic metamaterials and space-time engineering."
  },
  {
    name: "Dr. Sarah Johnson",
    role: "Senior Researcher",
    image: "/members/pic2.jpg",
    description:
      "Specializing in computational electromagnetics and metamaterial design."
  }
]

export const phds: TeamMember[] = [
  {
    name: "Dr. Michael Chen",
    role: "Postdoctoral Researcher",
    image: "/members/pic3.jpg",
    description: "Working on novel applications of space-time metamaterials."
  },
  {
    name: "Dr. Emily Davis",
    role: "PhD Candidate",
    image: "/members/pic4.jpg",
    description: "Focusing on wave propagation in complex media."
  },
  {
    name: "Dr. Rajesh Gupta",
    role: "PhD Candidate",
    image: "/members/pic5.jpg",
    description: "Researching adaptive metamaterials for telecommunications."
  }
]

export const team: TeamMember[] = [
  {
    name: "Alice Brown",
    role: "Research Assistant",
    image: "/members/pic6.jpg",
    description: "Assisting in data analysis and simulation tasks."
  },
  {
    name: "Tom Hanks",
    role: "Research Assistant",
    image: "/members/pic7.jpg",
    description: "Developing experimental setups for electromagnetic testing."
  },
  {
    name: "Lisa Green",
    role: "Research Intern",
    image: "/members/pic1.jpg",
    description: "Exploring machine learning applications in material analysis."
  },
  {
    name: "James White",
    role: "Research Intern",
    image: "/members/pic2.jpg",
    description: "Supporting computational electromagnetics simulations."
  },
  {
    name: "Karen Black",
    role: "Project Coordinator",
    image: "/members/pic3.jpg",
    description: "Ensuring seamless coordination across teams and projects."
  },
  {
    name: "Chris Blue",
    role: "Technician",
    image: "/members/pic4.jpg",
    description: "Maintaining and calibrating lab equipment."
  },
  {
    name: "Nancy Red",
    role: "Lab Assistant",
    image: "/members/pic5.jpg",
    description: "Handling laboratory supplies and inventory management."
  }
]

export const categorizedMembers: CategoryMembers[] = [
  { title: "Leaders", members: leaders },
  { title: "PhDs", members: phds },
  { title: "Team Members", members: team }
]

export const researchDetails: ResearchDetail[] = [
  {
    id: 1,
    title: "Advanced Electromagnetic Metamaterials",
    description:
      "This research focuses on the development of advanced electromagnetic metamaterials that can manipulate light and electromagnetic waves in novel ways. These materials enable groundbreaking applications in communication, sensing, and energy harvesting.",
    image: "/research/pic1.jpg",
    objectives: [
      "Develop new metamaterial structures",
      "Investigate novel electromagnetic properties",
      "Create practical applications for industry"
    ],
    methodology:
      "Our research employs a combination of theoretical modeling, computer simulations, and experimental validation. We utilize state-of-the-art equipment and facilities to conduct our experiments and analyze results.",
    impact:
      "This research has the potential to revolutionize various fields, including telecommunications, medical imaging, and energy harvesting. Our findings contribute to the broader scientific community and pave the way for future technological advancements."
  }
]

export const publications: Publication[] = [
  {
    id: 1,
    title: "Electron scattering at a potential temporal step discontinuity",
    authors: "F. Ok, A. Bahrami, and C. Caloz",
    journal: "Sci. Rep., vol. 14, no. 5559, pp. 1–9, Mar. 2024",
    type: "Journal Article"
  },
  {
    id: 2,
    title: "A generalized FDTD scheme for moving electromagnetic structures",
    authors: "A. Bahrami, Z.-L. Deck-Léger, Z. Li, and C. Caloz",
    journal:
      "IEEE Trans. Antennas Propag., vol. 72, no. 2, pp. 1721–1734, Feb. 2024",
    type: "Journal Article"
  },
  {
    id: 3,
    title: "Space-time Fresnel prism",
    authors: "Z. Li, X. Ma, A. Bahrami, Z.-L. Deck-Léger, and C. Caloz",
    journal: "Phys. Rev. Appl., vol. 20, no. 11, pp. 054 029:1–14, Nov. 2023",
    type: "Journal Article"
  }
]
