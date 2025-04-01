import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2">
            <h3 className="text-lg font-semibold mb-4">DirectProperty</h3>
            <p className="text-sm text-gray-600 mb-4">
              Connect directly with property owners. No brokerage, no hidden fees.
              Find your perfect home without any middlemen.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-gray-500 hover:text-primary">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-500 hover:text-primary">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-500 hover:text-primary">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-500 hover:text-primary">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-3">For Tenants/Buyers</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/rent" className="text-gray-600 hover:text-primary">Rent a Property</Link></li>
              <li><Link href="/buy" className="text-gray-600 hover:text-primary">Buy a Property</Link></li>
              <li><Link href="/packers-movers" className="text-gray-600 hover:text-primary">Packers & Movers</Link></li>
              <li><Link href="/rental-agreement" className="text-gray-600 hover:text-primary">Rental Agreement</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-3">For Owners</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/post-property" className="text-gray-600 hover:text-primary">Post Property</Link></li>
              <li><Link href="/owner-plans" className="text-gray-600 hover:text-primary">Owner Plans</Link></li>
              <li><Link href="/property-services" className="text-gray-600 hover:text-primary">Property Services</Link></li>
              <li><Link href="/blog" className="text-gray-600 hover:text-primary">Real Estate Blog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-3">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-gray-600 hover:text-primary">About Us</Link></li>
              <li><Link href="/careers" className="text-gray-600 hover:text-primary">Careers</Link></li>
              <li><Link href="/contact" className="text-gray-600 hover:text-primary">Contact Us</Link></li>
              <li><Link href="/privacy" className="text-gray-600 hover:text-primary">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-gray-600 hover:text-primary">Terms & Conditions</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-gray-200">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            <p className="text-sm text-gray-600">
              © {new Date().getFullYear()} DirectProperty. All rights reserved.
            </p>
            <div className="flex items-center gap-1 text-sm text-gray-600">
              Made with <Heart className="h-4 w-4 text-red-500 fill-red-500" /> by Property Enthusiasts
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
