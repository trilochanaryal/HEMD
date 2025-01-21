import { researchDetails } from '@/consts'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import Image from 'next/image'
import { ResearchDetail as ResearchDetailType } from '@/types'

export const ResearchDetail = ({ id }: { id: number }) => {
  const item = researchDetails.find((item) => item.id === id)

  if (!item) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <p className="text-xl mb-4">Research item not found.</p>
        <Button asChild>
          <Link href="/research">Back to Research</Link>
        </Button>
      </div>
    )
  }

  return (
    <>
      <Button asChild variant="outline" className="mb-4">
        <Link href="/research">← Back to Research</Link>
      </Button>
      <Card className="max-w-4xl mx-auto">
        <CardHeader className="p-0">
          <Image
            src={item.image || '/placeholder.svg'}
            alt={item.title}
            width={800}
            height={450}
            style={{ objectFit: 'cover' }}
            className="w-full h-64 sm:h-80 md:h-96  rounded-t-lg"
          />
        </CardHeader>
        <CardContent className="p-6">
          <CardTitle className="text-2xl sm:text-3xl mb-4">
            {item.title}
          </CardTitle>
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {item.description}
            </p>
            <h2 className="text-xl sm:text-2xl font-semibold mt-6 mb-3">
              Research Objectives
            </h2>
            <ul className="list-disc pl-5 mb-4">
              {item.objectives.map((objective, index) => (
                <li key={index}>{objective}</li>
              ))}
            </ul>
            <h2 className="text-xl sm:text-2xl font-semibold mt-6 mb-3">
              Methodology
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {item.methodology}
            </p>
            <h2 className="text-xl sm:text-2xl font-semibold mt-6 mb-3">
              Impact
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {item.impact}
            </p>
          </div>
        </CardContent>
      </Card>
    </>
  )
}
