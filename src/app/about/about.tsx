import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="container mx-auto py-10">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-2 text-3xl font-bold">About Direct Property</h1>
        <p className="mb-8 text-gray-600">Your trusted partner in finding the perfect property for your needs.</p>

        <div className="mb-12 overflow-hidden rounded-lg">
          <Image
            src="/placeholder.svg?height=400&width=1000"
            alt="Direct Property Team"
            width={1000}
            height={400}
            className="w-full object-cover"
          />
        </div>

        <div className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold">Our Story</h2>
          <p className="mb-4 text-gray-700">
            Founded in 2020, Direct Property was established with a simple mission: to make property searching and
            buying as straightforward and transparent as possible. We believe that finding your dream home or investment
            property shouldn't be complicated.
          </p>
          <p className="text-gray-700">
            Our team of experienced real estate professionals is dedicated to providing exceptional service and guidance
            throughout your property journey. Whether you're a first-time buyer, seasoned investor, or looking to sell
            your property, we're here to help every step of the way.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold">Our Values</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="rounded-lg border bg-white p-6 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-8 w-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-semibold">Integrity</h3>
              <p className="text-sm text-gray-600">
                We conduct our business with honesty and transparency, always putting our clients' interests first.
              </p>
            </div>

            <div className="rounded-lg border bg-white p-6 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-8 w-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-semibold">Excellence</h3>
              <p className="text-sm text-gray-600">
                We strive for excellence in everything we do, from property listings to client service.
              </p>
            </div>

            <div className="rounded-lg border bg-white p-6 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-8 w-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-semibold">Innovation</h3>
              <p className="text-sm text-gray-600">
                We embrace technology and innovative solutions to improve the property buying and selling experience.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="mb-4 text-2xl font-semibold">Meet Our Leadership</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            <div className="overflow-hidden rounded-lg border bg-white">
              <div className="relative aspect-square overflow-hidden">
                <Image src="/placeholder.svg?height=300&width=300" alt="CEO" fill className="object-cover" />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold">John Smith</h3>
                <p className="text-sm text-gray-500">CEO & Founder</p>
              </div>
            </div>

            <div className="overflow-hidden rounded-lg border bg-white">
              <div className="relative aspect-square overflow-hidden">
                <Image src="/placeholder.svg?height=300&width=300" alt="COO" fill className="object-cover" />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold">Sarah Johnson</h3>
                <p className="text-sm text-gray-500">Chief Operations Officer</p>
              </div>
            </div>

            <div className="overflow-hidden rounded-lg border bg-white">
              <div className="relative aspect-square overflow-hidden">
                <Image src="/placeholder.svg?height=300&width=300" alt="Head of Sales" fill className="object-cover" />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold">Michael Chen</h3>
                <p className="text-sm text-gray-500">Head of Sales</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
