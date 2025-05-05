// src/components/PropertyList.tsx
"use client";

import { Suspense } from "react";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { supabase } from "@/lib/supabase"; // Assuming your Supabase client is initialized here

interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  location: string;
  // Add other fields as per your table schema
  property_type: string;
  price_range:string;
}

interface PropertyListProps {
}

const PropertyList = ({}: PropertyListProps) => {
    const [properties, setProperties] = useState<Property[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const searchParams = useSearchParams();

    useEffect(() => {
        const fetchProperties = async () => {
            const location = searchParams.get("location");
            const propertyType = searchParams.get("propertyType");
            const budget = searchParams.get("budget");

            setLoading(true);
            setError(null);

            let query = supabase.from("properties").select("*");

            if (location) {
                query = query.eq("location", location);
            }
            if (propertyType) {
                query = query.eq("property_type", propertyType);
            }
            if (budget) {
                query = query.eq("price_range", budget);
            }
            const { data, error } = await query;

            if (error) {
                setError(error.message);
            } else {
                setProperties(data as Property[]);
            }

            setLoading(false);
        };

        fetchProperties();
    }, [searchParams]);

    return (
        <Suspense fallback={<p>Loading...</p>}>
            <div>
                <h1>Properties</h1>
                <ul>
                    {properties.map((property) => (
                        <li key={property.id}>
                            <h2>{property.title}</h2>
                            <p>{property.description}</p>
                            <p>Price: {property.price}</p>
                            <p>Type: {property.property_type}</p>
                        </li>
                    ))}
                </ul>
                {loading && <p>Loading properties...</p>}
                {error && <p>Error: {error}</p>}
            </div>
        </Suspense>
    );
    };

    export default PropertyList;
