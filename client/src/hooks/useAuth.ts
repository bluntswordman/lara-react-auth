import AuthInterface from '@/contract/interfaces/AuthInterface'
import { LoginData, RegisterData } from '@/contract/types/auth'
import axios from '@/libs/axios'

export default function useAuth(): AuthInterface {
  const csrf = async () => axios.get('/sanctum/csrf-cookie')

  const register = async (data: RegisterData) => {
    await csrf()
    try {
      const response = await axios.post('/register', data)
      return { error: false, status: response.status, message: response.data.message }
    } catch (error: any) {
      return { error: true, status: error.response.status, message: error.response.data.message }
    }
  }

  const login = async (data: LoginData) => {
    await csrf()
    try {
      const response = await axios.post('/login', data)
      return { error: false, status: response.status, message: response.data.message }
    } catch (error: any) {
      return { error: true, status: error.response.status, message: error.response.data.message }
    }
  }

  return { register, login }
}