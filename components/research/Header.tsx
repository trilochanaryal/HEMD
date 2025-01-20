import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-bold text-gray-900 dark:text-white"
        >
          Research Lab
        </Link>
        <nav>
          <Button variant="ghost" asChild>
            <Link href="/research">Research</Link>
          </Button>
        </nav>
      </div>
    </header>
  )
}
