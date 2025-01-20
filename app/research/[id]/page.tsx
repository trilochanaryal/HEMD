import { ResearchDetail } from "@/components/research/ResearchDetails"
import { research } from "@/consts"

export async function generateStaticParams() {
  return research.map((item) => ({
    id: item.id.toString()
  }))
}

interface PageProps {
  params: Promise<{ id: string }>
}

export default async function Page({ params }: PageProps) {
  const resolvedParams = await params
  const id = Number.parseInt(resolvedParams.id, 10)

  return (
    <div className="min-h-screen">
      <main className="container mx-auto px-4 py-8">
        <ResearchDetail id={id} />
      </main>
    </div>
  )
}
