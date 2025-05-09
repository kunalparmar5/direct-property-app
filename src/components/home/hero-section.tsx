"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search } from "lucide-react";
import Link from "next/link";
export function HeroSection() {
  return (
    <section className="relative py-12 md:py-16 lg:py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="container flex flex-col items-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4">
          World's Largest No-Brokerage Property Site
        </h1>
        <p className="text-lg text-gray-600 text-center mb-8 max-w-3xl">
          Connect directly with verified owners and save on brokerage fees.
          Find your dream property without any middlemen.
        </p>

        <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-6">    
          <Tabs defaultValue="buy" className="w-full">
            <TabsList className="grid grid-cols-3 mb-6">
              <TabsTrigger value="buy">Buy</TabsTrigger>
              <TabsTrigger value="rent">Rent</TabsTrigger>
              <TabsTrigger value="commercial">Commercial</TabsTrigger>
            </TabsList>
            <TabsContent value="buy"><SearchForm/></TabsContent>
            <TabsContent value="rent"><SearchFormRent/></TabsContent>
            <TabsContent value="commercial"><SearchFormCommercial/></TabsContent>
          </Tabs>
        </div>
        
        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          <Button variant="outline" size="sm">Mumbai</Button>
          <Button variant="outline" size="sm">Delhi</Button>
          <Button variant="outline" size="sm">Bangalore</Button>
          <Button variant="outline" size="sm">Pune</Button>
          <Button variant="outline" size="sm">Chennai</Button>
          <Button variant="outline" size="sm">Hyderabad</Button>
          <Button variant="outline" size="sm">Kolkata</Button>
        </div>

        <div className="mt-10 bg-blue-50 p-4 rounded-lg text-center w-full max-w-2xl">
          <p className="text-sm font-medium">Are you a property owner?</p>
          <Button className="mt-2" size="sm" variant="default"> <Link href={"/post-property"}> Post Your Property Ad</Link></Button>
        </div>
      </div>
    </section>
  );
}


function SearchForm() {
  const router = useRouter();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const location = formData.get("location") as string;
    const propertyType = formData.get("propertyType") as string;
    const budget = formData.get("budget") as string;

    const queryParams = new URLSearchParams();
    if (location) queryParams.append("location", location);
    if (propertyType) queryParams.append("type", propertyType);
    if (budget) queryParams.append("budget", budget);

    router.push(`/properties?${queryParams.toString()}`);
  };

  return (
    <TabsContent value="buy">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="col-span-1 md:col-span-2">
            <Input
              id="location"
              name="location"
              placeholder="Enter location, project, or landmark"
              className="h-12 w-full"
            />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <select
              id="propertyType"
              name="propertyType"
              className="h-12 rounded-md border border-input bg-background px-3 py-2 text-sm"
              defaultValue=""
            >
              <option value="" disabled>Property Type</option>
              <option value="apartment">Apartment</option>
              <option value="house">Independent House</option>
              <option value="villa">Villa</option>
              <option value="plot">Plot/Land</option>
            </select>
          <select
          id="budget"
          name="budget"
          className="h-12 rounded-md border border-input bg-background px-3 py-2 text-sm"
          defaultValue=""
        >
        <option value="" disabled>Budget</option>
        <option value="Under ₹50 Lac">Under ₹50 Lac</option>
        <option value="₹50 Lac - 1 Cr">₹50 Lac - 1 Cr</option>
        <option value="₹1 Cr - 2 Cr">₹1 Cr - 2 Cr</option>
        <option value="₹2 Cr - 5 Cr">₹2 Cr - 5 Cr</option>
        <option value="₹5 Cr+">₹5 Cr+</option>
      </select>
        </div>
      </div>
      <Button className="w-full md:w-auto md:px-8 h-12 mt-4" size="lg" type="submit">
        <Search className="mr-2 h-4 w-4" /> Search Properties
      </Button>
    </form>
  </TabsContent>
  );
}


function SearchFormRent() {
  const router = useRouter();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const location = formData.get("location") as string;
    const propertyType = formData.get("propertyType") as string;
    const budget = formData.get("budget") as string;

    const queryParams = new URLSearchParams();
    if (location) queryParams.append("location", location);
    if (propertyType) queryParams.append("type", propertyType);
    if (budget) queryParams.append("budget", budget);

    router.push(`/properties?${queryParams.toString()}`);
  };

  return (
    <TabsContent value="rent">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="col-span-1 md:col-span-2">
            <Input
              id="location"
              name="location"
              placeholder="Enter location, project, or landmark"
              className="h-12 w-full"
            />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <select
              id="propertyType"
              name="propertyType"
              className="h-12 rounded-md border border-input bg-background px-3 py-2 text-sm"
              defaultValue=""
            >
              <option value="" disabled>Property Type</option>
              <option value="1bhk">1 BHK</option>
              <option value="2bhk">2 BHK</option>
              <option value="3bhk">3 BHK</option>
              <option value="4bhk">4 BHK</option>
              <option value="pg">PG/Hostel</option>
            </select>
            <select
              id="budget"
              name="budget"
              className="h-12 rounded-md border border-input bg-background px-3 py-2 text-sm"
              defaultValue=""
            >
              <option value="" disabled>Budget</option>
              <option value="Under ₹10,000">Under ₹10,000</option>
              <option value="₹10,000 - ₹20,000">₹10,000 - ₹20,000</option>
              <option value="₹20,000 - ₹30,000">₹20,000 - ₹30,000</option>
              <option value="₹30,000 - ₹50,000">₹30,000 - ₹50,000</option>
              <option value="₹50,000+">₹50,000+</option>
            </select>
          </div>
        </div>
        <Button className="w-full md:w-auto md:px-8 h-12 mt-4" size="lg" type="submit">
          <Search className="mr-2 h-4 w-4" /> Find Rentals
        </Button>
      </form>
    </TabsContent>
  );
}


function SearchFormCommercial() {
  const router = useRouter();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const location = formData.get("location") as string;
    const propertyType = formData.get("propertyType") as string;
    const purpose = formData.get("purpose") as string;

    const queryParams = new URLSearchParams();
    if (location) queryParams.append("location", location);
    if (propertyType) queryParams.append("type", propertyType);
    if (purpose) queryParams.append("purpose", purpose);

    router.push(`/properties?${queryParams.toString()}`);
  };

  return (
    <TabsContent value="commercial">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="col-span-1 md:col-span-2">
            <Input
              id="location"
              name="location"
              placeholder="Enter location, project, or landmark"
              className="h-12 w-full"
            />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <select
              id="propertyType"
              name="propertyType"
              className="h-12 rounded-md border border-input bg-background px-3 py-2 text-sm"
              defaultValue=""
            >
              <option value="" disabled>Property Type</option>
              <option value="office">Office Space</option>
              <option value="shop">Shop/Retail</option>
              <option value="warehouse">Warehouse</option>
              <option value="industrial">Industrial</option>
            </select>
            <select
              id="purpose"
              name="purpose"
              className="h-12 rounded-md border border-input bg-background px-3 py-2 text-sm"
              defaultValue=""
            >
              <option value="" disabled>Purpose</option>
              <option value="buy">Buy</option>
              <option value="rent">Rent/Lease</option>
            </select>
          </div>
        </div>
        <Button className="w-full md:w-auto md:px-8 h-12 mt-4" size="lg" type="submit">
          <Search className="mr-2 h-4 w-4" /> Search Commercial
        </Button>
      </form>
    </TabsContent>
  );
}
