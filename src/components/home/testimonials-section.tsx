import React from "react";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Shubham R.",
    location: "Pune",
    avatar: "/avatars/user-1.png",
    rating: 5,
    comment: "The site really helped me find good properties without any brokerage. I was scared of high deposit and brokerage fees, but this platform made it simple to find a great home directly from owners."
  },
  {
    id: 2,
    name: "Lisa D.",
    location: "Mumbai",
    avatar: "/avatars/user-2.png",
    rating: 5,
    comment: "It was a nice experience with DirectProperty. They helped me find a new home to stay as it was difficult for me as an individual to find a home with friendly roommates. Thankfully they helped me get one with all kinds of facilities."
  },
  {
    id: 3,
    name: "Kishore P.",
    location: "Bangalore",
    avatar: "/avatars/user-3.png",
    rating: 5,
    comment: "DirectProperty provides a great place to stay with safe environment. If they show you something about a property, that is always exactly as described. No fake pictures or misleading information."
  },
  {
    id: 4,
    name: "Anoop N.",
    location: "Delhi",
    avatar: "/avatars/user-4.png",
    rating: 5,
    comment: "Excellent service and an equally involved team. I opted for the premium plan and got a good deal on my property. Highly recommended app for anyone looking to rent or buy without brokers."
  },
  {
    id: 5,
    name: "Tiasha M.",
    location: "Chennai",
    avatar: "/avatars/user-5.png",
    rating: 5,
    comment: "The service was great and very professional. Their relationship manager was efficient. They noted my requirements quite well and suggested a list of options. I shortlisted one from them and in just one visit, I was able to finalize!"
  }
];

export function TestimonialsSection() {
  return (
    <section className="py-16 bg-blue-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Our Customers Love Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here's what our satisfied users have to say about their experience with DirectProperty
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3 pl-6">
                <TestimonialCard testimonial={testimonial} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8">
            <CarouselPrevious className="relative static mr-2" />
            <CarouselNext className="relative static ml-2" />
          </div>
        </Carousel>

        <div className="mt-12 text-center">
          <p className="text-sm text-gray-600 mb-2">Download our app</p>
          <p className="text-base font-medium mb-6">Find a new home on the go</p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/download/android" className="inline-block">
              <img
                src="https://ext.same-assets.com/0/1747041469.png"
                alt="Download on Google Play"
                className="h-12"
              />
            </Link>
            <Link href="/download/ios" className="inline-block">
              <img
                src="https://ext.same-assets.com/0/3019850538.svg"
                alt="Download on App Store"
                className="h-12"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  return (
    <Card className="h-full">
      <CardContent className="p-6">
        <div className="flex items-center mb-4">
          <Avatar className="h-10 w-10 mr-4">
            <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
            <AvatarImage src={testimonial.avatar} />
          </Avatar>
          <div>
            <h4 className="font-medium">{testimonial.name}</h4>
            <p className="text-sm text-gray-500">{testimonial.location}</p>
          </div>
        </div>

        <div className="flex mb-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={`star-${testimonial.id}-${i}`}
              className={`h-4 w-4 ${
                i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
              }`}
            />
          ))}
        </div>

        <p className="text-sm text-gray-600 line-clamp-4">{testimonial.comment}</p>
      </CardContent>
    </Card>
  );
}
