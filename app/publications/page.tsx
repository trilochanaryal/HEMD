"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const publications = [
  {
    title: "Electron scattering at a potential temporal step discontinuity",
    authors: "F. Ok, A. Bahrami, and C. Caloz",
    journal: "Sci. Rep., vol. 14, no. 5559, pp. 1–9, Mar. 2024",
    type: "Journal Article",
  },
  {
    title: "A generalized FDTD scheme for moving electromagnetic structures",
    authors: "A. Bahrami, Z.-L. Deck-Léger, Z. Li, and C. Caloz",
    journal: "IEEE Trans. Antennas Propag., vol. 72, no. 2, pp. 1721–1734, Feb. 2024",
    type: "Journal Article",
  },
  {
    title: "Space-time Fresnel prism",
    authors: "Z. Li, X. Ma, A. Bahrami, Z.-L. Deck-Léger, and C. Caloz",
    journal: "Phys. Rev. Appl., vol. 20, no. 11, pp. 054 029:1–14, Nov. 2023",
    type: "Journal Article",
  },
];

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
  );
}