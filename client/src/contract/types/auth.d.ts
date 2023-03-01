export type LoginData = {
  email: string
  password: string
}

export type RegisterData = {
  name: string
  email: string
  password: string
  passwordConfirmation: string
}

export type StatusResponse = {
  error: boolean
  status: number
  message: string
}