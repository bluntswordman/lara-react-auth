import type { LoginData, RegisterData, StatusResponse } from '@/contract/types/auth'

export default interface AuthInterface {
  register: (data: RegisterData) => Promise<StatusResponse>
  login: (data: LoginData) => Promise<StatusResponse>
}