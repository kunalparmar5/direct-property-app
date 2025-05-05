"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { supabaseClient } from "@/lib/supabase/client"
import { useToast } from "@/components/ui/use-toast"

export default function AuthCallbackPage() {
  const router = useRouter()
  const { toast } = useToast()

  useEffect(() => {
    const handleAuthCallback = async () => {
      const { error } = await supabaseClient.auth.getSession()

      if (error) {
        toast({
          title: "Authentication error",
          description: error.message,
          variant: "destructive",
        })
        router.push("/auth/login")
        return
      }

      // Get the redirect URL from localStorage or default to home
      const redirectTo = localStorage.getItem("authRedirectTo") || "/"
      localStorage.removeItem("authRedirectTo") // Clean up

      toast({
        title: "Success",
        description: "You have been logged in successfully.",
      })

      router.push(redirectTo)
      router.refresh()
    }

    handleAuthCallback()
  }, [router, toast])

  return (
    <div className="container mx-auto flex min-h-[calc(100vh-200px)] items-center justify-center py-10">
      <div className="text-center">
        <h1 className="text-2xl font-bold">Completing authentication...</h1>
        <p className="mt-2 text-gray-600">Please wait while we log you in.</p>
        <div className="mt-4 flex justify-center">
          <div className="h-8 w-8 animate-spin rounded-full border-b-2 border-t-2 border-blue-600"></div>
        </div>
      </div>
    </div>
  )
}
