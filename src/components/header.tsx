import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Menu, Home, Building, Search, LogIn, UserPlus, Phone, Banknote } from "lucide-react";

export function Header() {
  return (
    <header className="border-b sticky top-0 bg-white z-50">
      <div className="container flex h-16 items-center justify-between py-4">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2">
            <Home className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold text-primary">DirectProperty</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link href="/buy" className="text-sm font-medium hover:text-primary">
              Buy
            </Link>
            <Link href="/rent" className="text-sm font-medium hover:text-primary">
              Rent
            </Link>
            <Link href="/commercial" className="text-sm font-medium hover:text-primary">
              Commercial
            </Link>
            <Link href="/post-property" className="text-sm font-medium hover:text-primary">
              Post Property
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-4">
            <Link href="/services/rental-agreement">
              <Button variant="ghost" size="sm" className="text-xs">
                Rental Agreement
              </Button>
            </Link>
            <Link href="/services/packers-movers">
              <Button variant="ghost" size="sm" className="text-xs">
                Packers & Movers
              </Button>
            </Link>
            <Button variant="outline" size="sm" className="text-xs gap-1">
              <Phone className="h-3 w-3" /> Contact Us
            </Button>
            <Button variant="outline" size="sm" className="text-xs gap-1 text-primary border-primary">
              <Banknote className="h-3 w-3" /> Pay Rent
            </Button>
          </div>

          <div className="flex items-center gap-2">
            <Link href="/login">
              <Button size="sm" variant="ghost" className="gap-1">
                <LogIn className="h-4 w-4" />
                <span className="hidden md:inline">Login</span>
              </Button>
            </Link>
            <Link href="/signup">
              <Button size="sm" variant="default" className="gap-1">
                <UserPlus className="h-4 w-4" />
                <span className="hidden md:inline">Sign Up</span>
              </Button>
            </Link>
          </div>

          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}
