import React from 'react';

// Define the types for the links
interface Link {
  name: string;
  url: string;
}

// Define the type for the usefulLinks object
interface UsefulLinksData {
  "Academic Resources": Link[];
  "Research Tools": Link[];
  "Professional Organizations": Link[];
  "Partner Institutions": Link[];
  "Funding Organizations": Link[];
}

// Define the usefulLinks object with the correct type
const usefulLinks: UsefulLinksData = {
  "Academic Resources": [
    { name: "KU Leuven Libraries", url: "https://bib.kuleuven.be/english" },
    { name: "IEEE Xplore Digital Library", url: "https://ieeexplore.ieee.org" },
    { name: "Science Direct", url: "https://www.sciencedirect.com" },
    { name: "arXiv", url: "https://arxiv.org" }
  ],
  "Research Tools": [
    { name: "COMSOL Multiphysics", url: "https://www.comsol.com" },
    { name: "MATLAB", url: "https://www.mathworks.com" },
    { name: "CST Studio Suite", url: "https://www.3ds.com/products-services/simulia/products/cst-studio-suite" }
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
    { name: "Marie Skłodowska-Curie Actions", url: "https://ec.europa.eu/research/mariecurieactions" }
  ]
};

const UsefulLinks: React.FC = () => {
  return (
    <section className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Useful Links</h1>
      
      {/* Iterate through each category */}
      {Object.keys(usefulLinks).map((category, idx) => (
        <div key={idx} className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">{category}</h2>
          
          <ul className="list-disc list-inside mb-4">
            {(usefulLinks[category as keyof UsefulLinksData] as Link[]).map((link, index) => (
              <li key={index} className="text-gray-700 dark:text-gray-300">
                <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default UsefulLinks;
