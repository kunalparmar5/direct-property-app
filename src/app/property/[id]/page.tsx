import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  Bed,
  Bath,
  Square,
  Phone,
  Calendar,
  Home,
  User,
  Heart,
  Share,
  ArrowLeft
} from "lucide-react";

// Mock property data for all properties - in a real app this would come from an API or database
const properties = [
  {
    id: "prop-1",
    title: "3 BHK Apartment in Manya Hi Living, Electronic City",
    type: "Apartment",
    location: "Electronic City, Bangalore",
    price: 7500000,
    priceUnit: "₹",
    image: "https://ext.same-assets.com/1518125001/658786211.jpeg",
    images: [
      "https://ext.same-assets.com/1518125001/658786211.jpeg",
      "https://ext.same-assets.com/1518125001/1263775754.jpeg",
      "https://ext.same-assets.com/1518125001/2289473709.false",
    ],
    bedrooms: 3,
    bathrooms: 2,
    area: 1425,
    areaUnit: "sq.ft",
    isNew: true,
    isVerified: true,
    postedDate: "2 days ago",
    features: [
      "Gated Society",
      "24x7 Security",
      "Power Backup",
      "Lift",
      "Swimming Pool",
      "Garden",
      "Gym",
      "Club House",
      "Visitor Parking",
      "Children's Play Area"
    ],
    description: "This 3bhk in Electronic City for sale is an ideal investment and it is very close to many IT companies in E-City phase 1. This 3bhk is semi-furnished, well maintained, with full cupboards in 3 bedrooms, TV unit, modular kitchen, and full ventilation for kitchen, hall, and bedrooms. The home is spacious and comfortable with ample parking space for car and bike. It is close to schools, hospitals, and public transport.",
    owner: {
      name: "Thirupathi Reddy",
      phone: "+91 7500000000",
      postedProperties: 3,
      verified: true
    }
  },
  {
    id: "prop-2",
    title: "2 BHK Flat in Sai Krishna Paradise For Sale",
    type: "Apartment",
    location: "Chikkalasandra, Bangalore",
    price: 6100000,
    priceUnit: "₹",
    image: "https://ext.same-assets.com/1518125001/1263775754.jpeg",
    images: [
      "https://ext.same-assets.com/1518125001/1263775754.jpeg",
      "https://ext.same-assets.com/1518125001/658786211.jpeg",
      "https://ext.same-assets.com/1518125001/2289473709.false",
    ],
    bedrooms: 2,
    bathrooms: 2,
    area: 1036,
    areaUnit: "sq.ft",
    isNew: false,
    isVerified: true,
    postedDate: "1 week ago",
    features: [
      "Gated Society",
      "24x7 Security",
      "Power Backup",
      "Lift",
      "Children's Play Area"
    ],
    description: "Beautiful 2 BHK flat in Chikkalasandra, close to all amenities. It offers a spacious layout with modern amenities and is well-maintained.",
    owner: {
      name: "Pavan Kumar",
      phone: "+91 8800000000",
      postedProperties: 1,
      verified: true
    }
  }
];

// Required for static export - this tells Next.js which pages to generate at build time
export function generateStaticParams() {
  return properties.map(property => ({
    id: property.id,
  }));
}

export default function PropertyDetail({ params }: { params: { id: string } }) {
  // Find the property that matches the ID from the URL
  const property = properties.find(p => p.id === params.id) || properties[0];

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="bg-gray-50 py-3 border-b">
          <div className="container flex items-center text-sm gap-1 text-gray-600">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span>/</span>
            <Link href="/search" className="hover:text-primary">Properties</Link>
            <span>/</span>
            <span className="text-gray-500 truncate">{property.title}</span>
          </div>
        </div>

        {/* Property Header */}
        <div className="container mt-6 mb-8">
          <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-4">
            <div>
              <Link href="/" className="flex items-center text-sm text-gray-500 hover:text-primary mb-2">
                <ArrowLeft className="h-4 w-4 mr-1" /> Back to home
              </Link>
              <h1 className="text-2xl md:text-3xl font-bold">{property.title}</h1>
              <div className="flex items-center mt-2 text-gray-600">
                <MapPin className="h-4 w-4 mr-1 flex-shrink-0" />
                <span>{property.location}</span>
              </div>
            </div>
            <div className="flex items-end gap-4">
              <div className="text-right">
                <div className="text-sm text-gray-500">Price</div>
                <div className="text-2xl font-bold text-primary">{property.priceUnit} {property.price.toLocaleString('en-IN')}</div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="icon">
                  <Heart className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Share className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Property Images */}
        <div className="container mb-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2 relative aspect-video rounded-lg overflow-hidden">
              <Image
                src={property.images[0] || "/placeholder.jpg"}
                alt={property.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="md:col-span-1 grid grid-cols-2 gap-4">
              {property.images.slice(1, 3).map((image, index) => (
                <div key={`image-${property.id}-${index}`} className="relative aspect-square rounded-lg overflow-hidden">
                  <Image
                    src={image}
                    alt={`${property.title} - image ${index + 2}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Property Details */}
        <div className="container mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              {/* Overview */}
              <div className="bg-white rounded-lg border p-6 mb-8">
                <h2 className="text-xl font-semibold mb-4">Overview</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <DetailItem icon={<Bed className="h-5 w-5 text-primary" />} label="Bedrooms" value={`${property.bedrooms}`} />
                  <DetailItem icon={<Bath className="h-5 w-5 text-primary" />} label="Bathrooms" value={`${property.bathrooms}`} />
                  <DetailItem icon={<Square className="h-5 w-5 text-primary" />} label="Area" value={`${property.area} ${property.areaUnit}`} />
                  <DetailItem icon={<Home className="h-5 w-5 text-primary" />} label="Property Type" value={property.type} />
                </div>
              </div>

              {/* Description */}
              <div className="bg-white rounded-lg border p-6 mb-8">
                <h2 className="text-xl font-semibold mb-4">Description</h2>
                <p className="text-gray-600">{property.description}</p>
              </div>

              {/* Features */}
              <div className="bg-white rounded-lg border p-6 mb-8">
                <h2 className="text-xl font-semibold mb-4">Features & Amenities</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {property.features.map(feature => (
                    <div key={feature} className="flex items-start">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 mr-2" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Location */}
              <div className="bg-white rounded-lg border p-6">
                <h2 className="text-xl font-semibold mb-4">Location</h2>
                <div className="h-60 bg-gray-200 rounded-lg flex items-center justify-center">
                  <MapPin className="h-8 w-8 text-gray-400" />
                  <p className="ml-2 text-gray-500">Map will be displayed here</p>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="md:col-span-1">
              <div className="bg-white rounded-lg border p-6 mb-6 sticky top-20">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mr-4">
                    <User className="h-6 w-6 text-gray-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{property.owner.name}</h3>
                    <p className="text-sm text-gray-500">{property.owner.postedProperties} properties listed</p>
                  </div>
                </div>

                <div className="mb-6">
                  <Button className="w-full gap-2 mb-3">
                    <Phone className="h-4 w-4" /> Show Contact Number
                  </Button>
                  <Button variant="outline" className="w-full">
                    Send Message
                  </Button>
                </div>

                <div className="text-xs text-gray-500 flex items-center">
                  <Calendar className="h-3 w-3 mr-1" />
                  <span>Property posted on {property.postedDate}</span>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Need assistance?</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Get help with property visits, documentation, or any other questions.
                </p>
                <Button size="sm" variant="outline" className="w-full">
                  Contact Support
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

function DetailItem({ icon, label, value }: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center">
      <div className="mr-3">{icon}</div>
      <div>
        <div className="text-xs text-gray-500">{label}</div>
        <div className="font-medium">{value}</div>
      </div>
    </div>
  );
}
