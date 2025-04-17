import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PropertyCard } from "@/components/property/property-card";
import { ArrowRight } from "lucide-react";

// Mock data for recent listings
const recentListings = [
  {
    id: "prop-1",
    title: "3 BHK Apartment in Manya Hi Living, Electronic City",
    type: "Apartment",
    location: "Electronic City, Bangalore",
    price: 7500000,
    image: "https://via.placeholder.com/640x480",
    bedrooms: 3,
    bathrooms: 2,
    area: 1425,
    isNew: true,
    isVerified: true,
    postedDate: "2 days ago"
  },
  {
    id: "prop-2",
    title: "2 BHK Flat in Sai Krishna Paradise For Sale",
    type: "Apartment",
    location: "Chikkalasandra, Bangalore",
    price: 6100000,
    image: "https://via.placeholder.com/640x480",
    bedrooms: 2,
    bathrooms: 2,
    area: 1036,
    isVerified: true,
    postedDate: "1 week ago"
  },
  {
    id: "prop-3",
    title: "4 BHK Villa in Premium Gated Community",
    type: "Villa",
    location: "Whitefield, Bangalore",
    price: 11500000,
    image: "https://via.placeholder.com/640x480",
    bedrooms: 4,
    bathrooms: 3,
    area: 2400,
    isNew: true,
    postedDate: "3 days ago"
  },
  {
    id: "prop-4",
    title: "Commercial Space for Rent in Tech Park",
    type: "Commercial",
    location: "HSR Layout, Bangalore",
    price: 80000,
    priceUnit: "₹",
    image: "https://via.placeholder.com/640x480",
    area: 1200,
    isVerified: true,
    postedDate: "5 days ago"
  },
  {
    id: "prop-5",
    title: "1 BHK Apartment for Rent Near Metro",
    type: "Apartment",
    location: "Indira Nagar, Bangalore",
    price: 25000,
    priceUnit: "₹",
    image: "https://via.placeholder.com/640x480",
    bedrooms: 1,
    bathrooms: 1,
    area: 650,
    isNew: true,
    postedDate: "1 day ago"
  },
  {
    id: "prop-6",
    title: "Premium Plot in Gated Layout",
    type: "Plot",
    location: "Devanahalli, Bangalore",
    price: 8500000,
    image: "https://via.placeholder.com/640x480",
    area: 2400,
    areaUnit: "sq.ft",
    isVerified: true,
    postedDate: "1 week ago"
  }
];

export function RecentListingsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold">Recent Properties</h2>
            <p className="text-gray-600 mt-2">
              Explore the latest properties added to our platform
            </p>
          </div>
          <div className="hidden md:block">
            <Button variant="outline" className="gap-2" asChild>
              <Link href="/search">
                View All Listings <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentListings.map(listing => (
            <PropertyCard
              key={listing.id}
              id={listing.id}
              title={listing.title}
              type={listing.type}
              location={listing.location}
              price={listing.price}
              priceUnit={listing.priceUnit}
              image={listing.image}
              bedrooms={listing.bedrooms}
              bathrooms={listing.bathrooms}
              area={listing.area}
              areaUnit={listing.areaUnit}
              isNew={listing.isNew}
              isVerified={listing.isVerified}
              postedDate={listing.postedDate}
            />
          ))}
        </div>

        <div className="mt-10 text-center md:hidden">
          <Button variant="outline" className="gap-2" asChild>
            <Link href="/search">
              View All Listings <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
