import type React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  FileText,
  Truck,
  Paintbrush,
  Home,
  UserCheck,
  ArrowRight,
  Star
} from "lucide-react";

const services = [
  {
    id: "rental-agreement",
    title: "Rental Agreement",
    description: "Get a legally valid rental agreement delivered to your doorstep within 24 hours.",
    icon: <FileText className="h-10 w-10 text-primary" />,
    link: "/services/rental-agreement"
  },
  {
    id: "packers-movers",
    title: "Packers & Movers",
    description: "Stress-free relocation with verified moving partners at the best prices.",
    icon: <Truck className="h-10 w-10 text-primary" />,
    link: "/services/packers-movers"
  },
  {
    id: "painting-cleaning",
    title: "Painting & Cleaning",
    description: "Professional home painting and cleaning services for your property.",
    icon: <Paintbrush className="h-10 w-10 text-primary" />,
    link: "/services/painting-cleaning"
  },
  {
    id: "property-management",
    title: "Property Management",
    description: "Complete care of your property including tenant management, maintenance, and more.",
    icon: <Home className="h-10 w-10 text-primary" />,
    link: "/services/property-management"
  },
  {
    id: "tenant-verification",
    title: "Tenant Verification",
    description: "Comprehensive background checks to find reliable tenants for your property.",
    icon: <UserCheck className="h-10 w-10 text-primary" />,
    link: "/services/tenant-verification"
  },
  {
    id: "premium-listings",
    title: "Premium Listings",
    description: "Get more visibility for your property with our premium listing packages.",
    icon: <Star className="h-10 w-10 text-primary" />,
    link: "/services/premium-listings"
  }
];

export function ServicesSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Value-Added Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide a range of additional services to make your property journey smooth and hassle-free
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
              link={service.link}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button variant="outline" className="gap-2" asChild>
            <Link href="/services">
              View All Services <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  title,
  description,
  icon,
  link
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
}) {
  return (
    <Card className="h-full hover:shadow-md transition-shadow">
      <CardContent className="pt-6">
        <div className="mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </CardContent>
      <CardFooter>
        <Button variant="ghost" size="sm" className="gap-2 mt-2 p-0" asChild>
          <Link href={link}>
            Learn More <ArrowRight className="h-3 w-3" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
