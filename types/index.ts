// Lead form submission types
export interface LeadSubmission {
  fullName: string
  phone: string
  message?: string
  serviceArea?: string
  source?: string
}

export interface LeadRecord extends LeadSubmission {
  id: string
  createdAt: string
  updatedAt?: string
}

export interface ApiResponse<T = unknown> {
  success: boolean
  data?: T
  error?: string
}
