"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const leaders = [
  {
    name: "Prof. Dr. John Smith",
    role: "Principal Investigator",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    description: "Leading research in electromagnetic metamaterials and space-time engineering.",
  },
  {
    name: "Dr. Sarah Johnson",
    role: "Senior Researcher",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    description: "Specializing in computational electromagnetics and metamaterial design.",
  },
];

const phds = [
  {
    name: "Dr. Michael Chen",
    role: "Postdoctoral Researcher",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    description: "Working on novel applications of space-time metamaterials.",
  },
  {
    name: "Dr. Emily Davis",
    role: "PhD Candidate",
    image: "https://images.unsplash.com/photo-1552058544-f2b08422138a",
    description: "Focusing on wave propagation in complex media.",
  },
  {
    name: "Dr. Rajesh Gupta",
    role: "PhD Candidate",
    image: "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9",
    description: "Researching adaptive metamaterials for telecommunications.",
  },
];

const team = [
  {
    name: "Alice Brown",
    role: "Research Assistant",
    image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef",
    description: "Assisting in data analysis and simulation tasks.",
  },
  {
    name: "Tom Hanks",
    role: "Research Assistant",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    description: "Developing experimental setups for electromagnetic testing.",
  },
  {
    name: "Lisa Green",
    role: "Research Intern",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
    description: "Exploring machine learning applications in material analysis.",
  },
  {
    name: "James White",
    role: "Research Intern",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    description: "Supporting computational electromagnetics simulations.",
  },
  {
    name: "Karen Black",
    role: "Project Coordinator",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    description: "Ensuring seamless coordination across teams and projects.",
  },
  {
    name: "Chris Blue",
    role: "Technician",
    image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61",
    description: "Maintaining and calibrating lab equipment.",
  },
  {
    name: "Nancy Red",
    role: "Lab Assistant",
    image: "https://images.unsplash.com/photo-1517423440428-a5a00ad493e8",
    description: "Handling laboratory supplies and inventory management.",
  },
];

const categorizedMembers = [
  { title: "Leaders", members: leaders },
  { title: "PhDs", members: phds },
  { title: "Team Members", members: team },
];

export default function MembersPage() {
  return (
    <div className="container mx-auto px-4 py-8 bg-background dark:bg-dark">
      <h1 className="mb-8 text-3xl font-bold text-primary dark:text-grey-900 dark:text-white">Our Team</h1>
      {categorizedMembers.map((category) => (
        <div key={category.title} className="mb-12">
          <h2 className="mb-6 text-2xl font-semibold text-primary dark:text-grey-900">{category.title}</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {category.members.map((member) => (
              <Card key={member.name} className="border shadow-sm hover:shadow-lg rounded-lg bg-card dark:bg-card text-card-foreground dark:text-card-foreground">
                <CardHeader>
                  <div className="relative mb-4 h-48 w-full overflow-hidden rounded-lg">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-300 transform hover:scale-105"
                    />
                  </div>
                  <CardTitle>{member.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-2 text-sm font-medium text-primary dark:text-grey-900">{member.role}</p>
                  <p className="text-sm text-muted-foreground dark:text-muted-foreground">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
