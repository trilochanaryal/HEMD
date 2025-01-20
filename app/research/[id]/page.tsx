import { ResearchDetail } from "@/components/ResearchDetails";
import { research } from '@/consts';
import { notFound } from 'next/navigation';

export default async function Page({ params }: { params: { id: string } }) {
  const item = research.find((item) => item.id === Number(params.id));

  if (!item) {
    notFound();
  }

  return <ResearchDetail id={params.id} />;
}

export async function generateStaticParams() {
  return research.map((item) => ({
    id: item.id.toString(),
  }));
}