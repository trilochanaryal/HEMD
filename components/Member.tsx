'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'
import { categorizedMembers } from '@/consts'
import type { TeamMember } from '@/types'

export default function Member() {
  return (
    <div className="container mx-auto px-4 py-8 bg-background dark:bg-dark">
      <h1 className="mb-8 text-3xl font-bold text-primary dark:text-grey-900 dark:text-white">
        Our Team
      </h1>
      {categorizedMembers.map((category) => (
        <div key={category.title} className="mb-12">
          <h2 className="mb-6 text-2xl font-semibold text-primary dark:text-grey-900">
            {category.title}
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {category.members.map((member: TeamMember) => (
              <Card
                key={member.name}
                className="border shadow-sm hover:shadow-lg rounded-lg bg-card dark:bg-card text-card-foreground dark:text-card-foreground"
              >
                <CardHeader>
                  <div className="relative mb-4 h-48 w-full overflow-hidden rounded-lg">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill={true}
                      className="object-cover transition-transform duration-300 transform hover:scale-105"
                    />
                  </div>
                  <CardTitle>{member.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-2 text-sm font-medium text-primary dark:text-grey-900">
                    {member.role}
                  </p>
                  <p className="text-sm text-muted-foreground dark:text-muted-foreground">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
