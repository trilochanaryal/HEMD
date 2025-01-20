import { ResearchList } from "@/components/research/ResearchList"

export default function ResearchPage() {
  return (
    <div className="min-h-screen">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Research Highlights</h1>
        <ResearchList />
      </main>
    </div>
  )
}

