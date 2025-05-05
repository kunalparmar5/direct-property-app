// src/app/properties/page.tsx
import { Suspense } from "react";
import PropertyList from "@/components/PropertyList";

export default function PropertiesPage() {
  return (
    <div>
      <h1>Our Properties</h1>
      <Suspense fallback={<div>Loading properties...</div>}>
        <PropertyList />
      </Suspense>
    </div>
  );
}