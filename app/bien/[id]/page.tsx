import { notFound } from "next/navigation";
import { properties } from "@/data/properties";
import PropertyDetail from "@/components/PropertyDetail";

export function generateStaticParams() {
  return properties.map((p) => ({ id: p.id }));
}

export default function PropertyPage({ params }: { params: { id: string } }) {
  const property = properties.find((p) => p.id === params.id);
  if (!property) notFound();
  return <PropertyDetail property={property} />;
}
