import Image from "next/image"
import { createServerClient } from "@/lib/supabase"
import { Key, ReactElement, JSXElementConstructor, ReactNode, AwaitedReactNode, ReactPortal } from "react"

export const dynamic = "force-dynamic"

export default async function AgentsPage() {
  const supabase = createServerClient()
  const { data: agents } = await supabase.from("agents").select("*")

  return (
    <div className="container mx-auto py-10">
      <h1 className="mb-8 text-3xl font-bold">Our Agents</h1>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {agents?.map((agent: { id: Key | null | undefined; profile_image: any; name: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | Promise<AwaitedReactNode> | null | undefined; email: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; phone: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; bio: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined }) =>  (
          <div key={agent.id} className="overflow-hidden rounded-lg border bg-white shadow-sm">
            <div className="relative aspect-square overflow-hidden">
              <Image
                src={agent.profile_image || "/placeholder-avatar.png"}
                alt={agent.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold">{agent.name}</h3>
              <p className="text-sm text-gray-500">{agent.email}</p>
              {agent.phone && <p className="text-sm text-gray-500">{agent.phone}</p>}
              {agent.bio && <p className="mt-2 text-sm text-gray-700">{agent.bio}</p>}
            </div>
          </div>
        ))}
      </div>

      {(!agents || agents.length === 0) && (
        <div className="mt-10 text-center">
          <p className="text-lg text-gray-500">No agents found</p>
        </div>
      )}
    </div>
  )
}
