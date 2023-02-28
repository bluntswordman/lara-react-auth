import AuthInterface from '@/contract/interfaces/AuthInterface'
import { ErrorResponse } from '@/contract/types/errorType'
import { LoginData, LoginResponse } from '@/contract/types/loginType'
import { RegisterData, RegisterResponse } from '@/contract/types/registerType'
import axios from '@/libs/axios'
import { useNavigate } from 'react-router-dom'

export default function useAuth(): AuthInterface {
  const navigate = useNavigate()

  const register = async (data: RegisterData): Promise<RegisterResponse | ErrorResponse> => {
    try {
      const response = await axios.post('/register', data)
      navigate('/login')
      return response.data
    } catch (error: any) {
      return {
        error: true,
        status: error.response.status,
        message: error.response.data.message,
      }
    }
  }

  const login = async (data: LoginData): Promise<LoginResponse | ErrorResponse> => {
    try {
      const response = await axios.post('/login', data)
      navigate('/')
      return response.data
    } catch (error: any) {
      return {
        error: true,
        status: error.response.status,
        message: error.response.data.message,
      }
    }
  }

  return { register, login }
}