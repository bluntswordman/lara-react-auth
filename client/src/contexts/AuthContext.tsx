import { LoginData, RegisterData } from '@/contract/types/auth'
import useAuth from '@/hooks/useAuth'
import axios from '@/libs/axios'
import { createContext, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AuthContext = createContext({} as any)

export const AuthProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const navigate = useNavigate()
  const [user, setUser] = useState(null)
  const [error, setError] = useState('')
  const { login, register } = useAuth()

  const getUser = async () => {
    const { data } = await axios.get('/api/user')
    setUser(data)
  }

  const loginHandler = async (data: LoginData) => {
    const res = await login(data)
    if (res.error) return setError(res.message)
    await getUser()
    navigate('/')
  }

  const registerHandler = async (data: RegisterData) => {
    const res = await register(data)
    if (res.error) setError(res.message)
    await getUser()
    navigate('/')
  }

  return (
    <AuthContext.Provider value={{ user, getUser, error: error, login: loginHandler, register: registerHandler }}>
      {children}
    </AuthContext.Provider>
  )
}

export default function useAuthContext() {
  return useContext(AuthContext)
}
