import type { Metadata } from "next"
import SeedPanel from "@/components/admin/seed-panel"

export const metadata: Metadata = {
  title: "Seed Database | Direct Property",
  description: "Admin panel for seeding the database with sample data",
}

export default function SeedPage() {
  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-6">Admin: Seed Database</h1>
      <SeedPanel />
    </div>
  )
}

