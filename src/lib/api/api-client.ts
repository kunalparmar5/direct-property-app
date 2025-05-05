import { toast } from "@/components/ui/use-toast"

// API response types
export type ApiResponse<T> = {
  data?: T
  error?: string
  status: number
}

// API client configuration
type ApiClientConfig = {
  baseUrl?: string
  headers?: Record<string, string>
  timeout?: number
}

// Default configuration
const defaultConfig: ApiClientConfig = {
  baseUrl: "",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 30000, // 30 seconds
}

/**
 * API Client for handling all API requests
 */
export class ApiClient {
  private config: ApiClientConfig

  constructor(config: ApiClientConfig = {}) {
    this.config = { ...defaultConfig, ...config }
  }

  /**
   * Make a GET request
   */
  async get<T>(endpoint: string, params?: Record<string, any>): Promise<ApiResponse<T>> {
    const url = this.buildUrl(endpoint, params)
    return this.request<T>("GET", url)
  }

  /**
   * Make a POST request
   */
  async post<T>(endpoint: string, data?: any): Promise<ApiResponse<T>> {
    const url = this.buildUrl(endpoint)
    return this.request<T>("POST", url, data)
  }

  /**
   * Make a PUT request
   */
  async put<T>(endpoint: string, data?: any): Promise<ApiResponse<T>> {
    const url = this.buildUrl(endpoint)
    return this.request<T>("PUT", url, data)
  }

  /**
   * Make a DELETE request
   */
  async delete<T>(endpoint: string, data?: any): Promise<ApiResponse<T>> {
    const url = this.buildUrl(endpoint)
    return this.request<T>("DELETE", url, data)
  }

  /**
   * Make a request with a file upload
   */
  async uploadFile<T>(
    endpoint: string,
    file: File,
    additionalData?: Record<string, any>,
  ): Promise<ApiResponse<T>> {
    const url = this.buildUrl(endpoint)
    const formData = new FormData()
    formData.append("file", file)

    if (additionalData) {
      Object.entries(additionalData).forEach(([key, value]) => {
        formData.append(key, String(value))
      })
    }

    return this.request<T>("POST", url, formData, {
      "Content-Type": "multipart/form-data",
    })
  }

  /**
   * Make a batch file upload
   */
  async uploadFiles<T>(
    endpoint: string,
    files: File[],
    additionalData?: Record<string, any>,
  ): Promise<ApiResponse<T>> {
    const url = this.buildUrl(endpoint)
    const formData = new FormData()

    files.forEach((file) => {
      formData.append("files", file)
    })

    if (additionalData) {
      Object.entries(additionalData).forEach(([key, value]) => {
        formData.append(key, String(value))
      })
    }

    return this.request<T>("POST", url, formData, {
      "Content-Type": "multipart/form-data",
    })
  }

  /**
   * Generic request method
   */
  private async request<T>(
    method: string,
    url: string,
    data?: any,
    customHeaders?: Record<string, string>,
  ): Promise<ApiResponse<T>> {
    const headers = { ...this.config.headers, ...customHeaders }
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), this.config.timeout)

    try {
      const options: RequestInit = {
        method,
        headers: headers as HeadersInit,
        credentials: "include", // Include cookies for authentication
        signal: controller.signal,
      }

      // Handle different types of request bodies
      if (data) {
        if (data instanceof FormData) {
          // For FormData, let the browser set the Content-Type
          delete headers["Content-Type"]
          options.body = data
        } else {
          options.body = JSON.stringify(data)
        }
      }

      const response = await fetch(url, options)
      clearTimeout(timeoutId)

      // Handle different response types
      let responseData: any
      const contentType = response.headers.get("Content-Type") || ""

      if (contentType.includes("application/json")) {
        responseData = await response.json()
      } else if (contentType.includes("text/")) {
        responseData = await response.text()
      } else {
        responseData = await response.blob()
      }

      if (!response.ok) {
        // Handle API errors
        const errorMessage = responseData?.error || response.statusText || "An error occurred"
        return {
          error: errorMessage,
          status: response.status,
        }
      }

      return {
        data: responseData,
        status: response.status,
      }
    } catch (error: any) {
      clearTimeout(timeoutId)

      // Handle network errors and timeouts
      if (error.name === "AbortError") {
        return {
          error: "Request timed out",
          status: 408,
        }
      }

      return {
        error: error.message || "Network error",
        status: 0,
      }
    }
  }

  /**
   * Build URL with query parameters
   */
  private buildUrl(endpoint: string, params?: Record<string, any>): string {
    const url = new URL(
      endpoint.startsWith("http") ? endpoint : `${this.config.baseUrl}${endpoint.startsWith("/") ? "" : "/"}${endpoint}`,
      window.location.origin,
    )

    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          if (Array.isArray(value)) {
            value.forEach((item) => url.searchParams.append(key, String(item)))
          } else {
            url.searchParams.append(key, String(value))
          }
        }
      })
    }

    return url.toString()
  }
}

// Create a singleton instance
export const apiClient = new ApiClient()

/**
 * Error handler for API requests
 */
export function handleApiError(error: any, fallbackMessage = "An error occurred"): string {
  console.error("API Error:", error)
  
  if (typeof error === "string") {
    return error
  }
  
  return error?.message || fallbackMessage
}

/**
 * Toast error message
 */
export function toastError(message: string): void {
  toast({
    title: "Error",
    description: message,
    variant: "destructive",
  })
}

/**
 * Toast success message
 */
export function toastSuccess(message: string): void {
  toast({
    title: "Success",
    description: message,
  })
}
