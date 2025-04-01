import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Building, Check } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-16 bg-gradient-to-r from-primary-50 to-blue-50">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              List Your Property For Free
            </h2>
            <p className="text-gray-600 mb-6">
              Connect directly with thousands of potential buyers and tenants.
              No brokerage fees, no hidden costs - just a seamless experience.
            </p>

            <div className="space-y-3 mb-8">
              <FeatureItem text="Zero brokerage fees for you and buyers/tenants" />
              <FeatureItem text="Get direct inquiries from verified users" />
              <FeatureItem text="List your property in just 5 minutes" />
              <FeatureItem text="Access additional services like rental agreements" />
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="w-full sm:w-auto" asChild>
                <Link href="/post-property">
                  Post Your Property
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto" asChild>
                <Link href="/owner-plans">
                  See Owner Plans
                </Link>
              </Button>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md aspect-square">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-4/5 h-4/5 bg-white rounded-xl shadow-xl p-6 flex flex-col items-center justify-center text-center">
                  <Building className="h-16 w-16 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">30 Lakh+</h3>
                  <p className="text-gray-600">Property owners trust us</p>
                </div>
              </div>

              <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-blue-100 rounded-xl -z-10 transform -translate-x-6 -translate-y-6" />
              <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-primary-100 rounded-xl -z-10 transform translate-x-6 translate-y-6" />
            </div>
          </div>
        </div>

        <div className="mt-16 pt-12 border-t border-gray-200">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">How It Works</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <StepCard
                number={1}
                title="Create Your Listing"
                description="Fill in the details about your property, add photos, and set your price."
              />
              <StepCard
                number={2}
                title="Connect with Buyers"
                description="Receive inquiries directly from verified buyers or tenants."
              />
              <StepCard
                number={3}
                title="Close the Deal"
                description="Meet the interested parties and finalize the transaction - no brokers needed."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureItem({ text }: { text: string }) {
  return (
    <div className="flex items-start">
      <div className="mr-2 mt-1">
        <Check className="h-4 w-4 text-green-500" />
      </div>
      <p className="text-sm text-gray-600">{text}</p>
    </div>
  );
}

function StepCard({ number, title, description }: {
  number: number;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold mb-4">
        {number}
      </div>
      <h4 className="text-lg font-semibold mb-2">{title}</h4>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}
