"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

import { publications } from "@/consts"

export default function PublicationsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-3xl font-bold">Publications</h1>
      <div className="space-y-4">
        {publications.map((pub, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="text-xl">{pub.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-2 text-primary">{pub.authors}</p>
              <p className="text-sm text-muted-foreground">{pub.journal}</p>
              <span className="mt-2 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                {pub.type}
              </span>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
