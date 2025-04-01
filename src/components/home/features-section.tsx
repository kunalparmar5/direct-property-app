import type React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { UserCheck, Home, Percent, ListChecks, Clock, Shield } from "lucide-react";

export function FeaturesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Why Use DirectProperty</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our platform focuses on creating direct connections between property owners and seekers,
            eliminating brokers and saving everyone time and money.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard
            icon={<Percent className="h-10 w-10 text-primary" />}
            title="Zero Brokerage"
            description="Save up to 2 months' rent or significant amounts on property purchases by avoiding broker fees completely."
          />

          <FeatureCard
            icon={<UserCheck className="h-10 w-10 text-primary" />}
            title="Verified Owners"
            description="Connect directly with verified property owners and tenants, ensuring a safe and transparent process."
          />

          <FeatureCard
            icon={<Home className="h-10 w-10 text-primary" />}
            title="Extensive Listings"
            description="Browse through thousands of property listings updated daily across all major cities in India."
          />

          <FeatureCard
            icon={<ListChecks className="h-10 w-10 text-primary" />}
            title="Detailed Filters"
            description="Find exactly what you're looking for with our comprehensive search filters and property details."
          />

          <FeatureCard
            icon={<Clock className="h-10 w-10 text-primary" />}
            title="Time-Saving"
            description="Schedule visits directly through the app and finalize deals faster without middlemen slowing you down."
          />

          <FeatureCard
            icon={<Shield className="h-10 w-10 text-primary" />}
            title="Secure Transactions"
            description="Get helpful tools like digital rental agreements and property management services for a worry-free experience."
          />
        </div>

        <div className="mt-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StatCard value="₹130 Cr+" label="Brokerage saved monthly" />
            <StatCard value="30 Lakh+" label="Users connected every month" />
            <StatCard value="2 Lakh+" label="New listings monthly" />
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon, title, description }: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <Card className="border-none shadow-sm hover:shadow-md transition-shadow">
      <CardHeader className="pb-2">
        <div className="mb-2">{icon}</div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-sm text-gray-600">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
}

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="bg-blue-50 p-6 rounded-xl">
      <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{value}</div>
      <div className="text-gray-600 text-sm">{label}</div>
    </div>
  );
}
