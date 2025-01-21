import { research } from '@/consts'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

export function ResearchList() {
  return (
    <>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {research.map((item) => (
          <Card key={item.id} className="flex flex-col">
            <CardHeader className="p-0">
              <Image
                src={item.image}
                alt={item.title}
                width={500}
                height={300}
                style={{ objectFit: 'cover' }}
                className="w-full h-48 rounded-t-lg"
              />
            </CardHeader>
            <CardContent className="flex-grow p-6">
              <CardTitle className="text-xl mb-2">{item.title}</CardTitle>
              <CardDescription>
                {item.description.slice(0, 100)}...
              </CardDescription>
            </CardContent>
            <CardFooter className="p-6 pt-0">
              <Button asChild>
                <Link href={`/research/${item.id}`}>Read More</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  )
}
