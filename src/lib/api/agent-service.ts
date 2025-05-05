import { apiClient, handleApiError, type ApiResponse } from "./api-client"

export interface AgentChatMessage {
  content: string
  userId?: string
  sessionId?: string
}

export interface AgentChatResponse {
  response: string
  suggestions?: string[]
}

/**
 * Service for agent-related API calls
 */
export const agentService = {
  /**
   * Send a message to the agent
   */
  async sendMessage(message: AgentChatMessage): Promise<ApiResponse<AgentChatResponse>> {
    try {
      return await apiClient.post<AgentChatResponse>("/api/agent/chat", message)
    } catch (error) {
      return {
        error: handleApiError(error),
        status: 500,
      }
    }
  },

  /**
   * Get all agents
   */
  async getAgents(): Promise<ApiResponse<any[]>> {
    try {
      return await apiClient.get<any[]>("/api/agents")
    } catch (error) {
      return {
        error: handleApiError(error),
        status: 500,
      }
    }
  },

  /**
   * Get an agent by ID
   */
  async getAgentById(id: string): Promise<ApiResponse<any>> {
    try {
      return await apiClient.get<any>(`/api/agents/${id}`)
    } catch (error) {
      return {
        error: handleApiError(error),
        status: 500,
      }
    }
  },

  /**
   * Submit agent feedback
   */
  async submitFeedback(messageId: string, helpful: boolean, feedback?: string): Promise<ApiResponse<any>> {
    try {
      return await apiClient.post<any>("/api/agent/feedback", {
        messageId,
        helpful,
        feedback,
      })
    } catch (error) {
      return {
        error: handleApiError(error),
        status: 500,
      }
    }
  },
}
