import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Home,
  MapPin,
  Bed,
  Bath,
  Square,
  IndianRupee,
  Heart,
  Building,
  Calendar
} from "lucide-react";

type PropertyCardProps = {
  id: string;
  title: string;
  type: string;
  location: string;
  price: number;
  priceUnit?: string;
  image: string;
  bedrooms?: number;
  bathrooms?: number;
  area?: number;
  areaUnit?: string;
  isNew?: boolean;
  isVerified?: boolean;
  postedDate?: string;
};

export function PropertyCard({
  id,
  title,
  type,
  location,
  price,
  priceUnit = "₹",
  image,
  bedrooms,
  bathrooms,
  area,
  areaUnit = "sq.ft",
  isNew = false,
  isVerified = false,
  postedDate,
}: PropertyCardProps) {

  // Format price with commas (Indian numbering system)
  const formattedPrice = price.toLocaleString('en-IN');

  return (
    <Card className="overflow-hidden h-full hover:shadow-md transition-shadow">
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Link href={`/property/${id}`}>
          {image ? (
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-transform hover:scale-105"
            />
          ) : (
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <Building className="h-12 w-12 text-gray-400" />
            </div>
          )}

          {isNew && (
            <div className="absolute top-2 left-2 bg-primary text-white text-xs px-2 py-1 rounded-sm">
              New
            </div>
          )}

          {isVerified && (
            <div className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-sm">
              Verified
            </div>
          )}
        </Link>

        <Button
          size="icon"
          variant="ghost"
          className="absolute bottom-2 right-2 h-8 w-8 rounded-full bg-white/80 hover:bg-white"
        >
          <Heart className="h-4 w-4 text-gray-600 hover:text-red-500" />
        </Button>
      </div>

      <CardContent className="p-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="font-bold text-lg">
              {priceUnit} {formattedPrice}
            </div>
            <div className="text-xs text-gray-500 flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              {postedDate || "Recent"}
            </div>
          </div>

          <Link href={`/property/${id}`} className="hover:underline">
            <h3 className="font-medium line-clamp-2" title={title}>
              {title}
            </h3>
          </Link>

          <div className="flex items-center text-sm text-gray-500">
            <MapPin className="h-3 w-3 flex-shrink-0 mr-1" />
            <span className="truncate">{location}</span>
          </div>

          <div className="flex items-center justify-between pt-2">
            {bedrooms !== undefined && (
              <div className="flex items-center text-sm text-gray-600">
                <Bed className="h-4 w-4 mr-1" />
                <span>{bedrooms} {bedrooms === 1 ? 'Bed' : 'Beds'}</span>
              </div>
            )}

            {bathrooms !== undefined && (
              <div className="flex items-center text-sm text-gray-600">
                <Bath className="h-4 w-4 mr-1" />
                <span>{bathrooms} {bathrooms === 1 ? 'Bath' : 'Baths'}</span>
              </div>
            )}

            {area !== undefined && (
              <div className="flex items-center text-sm text-gray-600">
                <Square className="h-4 w-4 mr-1" />
                <span>{area} {areaUnit}</span>
              </div>
            )}
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0 border-t mt-2">
        <div className="flex flex-col sm:flex-row w-full gap-2">
          <Button variant="outline" className="w-full sm:w-1/2 text-sm" size="sm">
            Contact Owner
          </Button>
          <Button variant="default" className="w-full sm:w-1/2 text-sm" size="sm">
            View Details
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
