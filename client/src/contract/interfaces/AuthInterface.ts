import type { ErrorResponse } from '@/contract/types/errorType'
import type { LoginData, LoginResponse } from '@/contract/types/loginType'
import type { RegisterData, RegisterResponse } from '@/contract/types/registerType'

export default interface AuthInterface {
  register: (data: RegisterData) => Promise<RegisterResponse | ErrorResponse>
  login: (data: LoginData) => Promise<LoginResponse | ErrorResponse>
}