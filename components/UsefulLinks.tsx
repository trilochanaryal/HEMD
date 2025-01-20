import React from "react"
import { usefulLinks } from "@/consts"
import Link from "next/link"

const UsefulLinks: React.FC = () => {
  return (
    <section className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
        Useful Links
      </h1>

      {/* Iterate through each category */}
      {Object.keys(usefulLinks).map((category, idx) => (
        <div key={idx} className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            {category}
          </h2>

          <ul className="list-disc list-inside mb-4">
            {(
              usefulLinks[category as string] as { url: string; name: string }[]
            ).map((link, index) => (
              <li key={index} className="text-gray-700 dark:text-gray-300">
                <Link
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  )
}

export default UsefulLinks
