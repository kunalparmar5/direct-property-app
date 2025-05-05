import type { Metadata } from "next";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Database, Users, Bell, MessageSquare, Settings } from "lucide-react";
import { useState } from "react";

export const metadata: Metadata = {
  title: "Admin Dashboard | Direct Property",
  description: "Admin dashboard for Direct Property application",
};

export default function AdminPage() {
  const adminFeatures = [
    {
      title: "Seed Database",
      description: "Create sample data for testing features",
      icon: <Database className="h-8 w-8" />,
      href: "/admin/seed",
    },
    {
      title: "User Management",
      description: "Manage user accounts and permissions",
      icon: <Users className="h-8 w-8" />,
      href: "/admin/users",
      comingSoon: true,
    },
    {
      title: "Notification Templates",
      description: "Manage system notification templates",
      icon: <Bell className="h-8 w-8" />,
      href: "/admin/notifications",
      comingSoon: true,
    },
    {
      title: "Message Templates",
      description: "Manage agent message templates",
      icon: <MessageSquare className="h-8 w-8" />,
      href: "/admin/messages",
      comingSoon: true,
    },
    {
      title: "System Settings",
      description: "Configure application settings",
      icon: <Settings className="h-8 w-8" />,
      href: "/admin/settings",
      comingSoon: true,
    },
  ];

  const [seeding, setSeeding] = useState(false);
  const [seedingResult, setSeedingResult] = useState<string | null>(null);

  const handleSeedDatabase = async () => {
    setSeeding(true);
    setSeedingResult(null);
    try {
      const response = await fetch("/api/seed", { method: "POST" });
      const result = await response.json();
      setSeedingResult(result.message);
    } catch (error) {
      setSeedingResult("Error seeding database: " + error);
    } finally {
      setSeeding(false);
    }
  };

  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
      <p className="text-muted-foreground mb-8">
        Manage and configure your Direct Property application
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {adminFeatures.map((feature) => (
          <Card
            key={feature.title}
            className={feature.comingSoon ? "opacity-70" : ""}
          >
            <CardHeader>
              <div className="flex items-center gap-2">
                {feature.icon}
                <CardTitle>{feature.title}</CardTitle>
              </div>
              {feature.comingSoon && (
                <span className="inline-flex items-center rounded-md bg-blue-50 dark:bg-blue-900/30 px-2 py-1 text-xs font-medium text-blue-700 dark:text-blue-300 ring-1 ring-inset ring-blue-700/10 dark:ring-blue-600/30">
                  Coming Soon
                </span>
              )}
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                {feature.description}
              </CardDescription>
            </CardContent>
            <CardFooter>
              {feature.comingSoon ? (
                <span className="text-sm text-muted-foreground">
                  This feature is not yet available
                </span>
              ) : (
                <Link
                  href={feature.href}
                  className="text-sm font-medium text-primary hover:underline"
                >
                  Access {feature.title}
                </Link>
              )}
              {feature.title === "Seed Database" && (
                <Button
                  onClick={handleSeedDatabase}
                  disabled={seeding}
                  className="ml-auto"
                >
                  {seeding ? "Seeding..." : "Seed Database"}
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
        {seedingResult && (
          <div className="mt-4 p-4 bg-gray-100 rounded-md">
            <h3 className="font-bold">Seeding Result:</h3>
            <p>{seedingResult}</p>
          </div>
        )}
      </div>
    </div>
  );
}