import useAuth from '@/hooks/useAuth'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  const { login } = useAuth()
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await login({ email, password })
  }

  return (
    <div className='w-full min-h-screen flex flex-col justify-center items-center'>
      <div className='border p-8 flex flex-col shadow rounded-md space-y-2 w-1/3 border-slate-200'>
        <h1 className='text-2xl font-bold text-slate-900 pb-5'>Login</h1>
        <form className='flex flex-col space-y-3' onSubmit={handleSubmit}>
          <div className='flex flex-col space-y-0.5'>
            <label htmlFor='email' className='text-sm font-medium text-slate-900'>Email</label>
            <input
              type='email'
              name='email'
              id='email'
              placeholder='example@example.com'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='rounded-md p-2 border transition-all duration-300 outline-none placeholder:text-sm placeholder:italic focus:outline-none placeholder-slate-400 border-slate-200 focus:border-slate-500'
            />
          </div>
          <div className='flex flex-col space-y-0.5'>
            <label htmlFor='password' className='text-sm font-medium text-slate-900'>Password</label>
            <input
              type='password'
              name='password'
              id='password'
              placeholder='********'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='rounded-md p-2 border transition-all duration-300 outline-none placeholder:text-sm placeholder:italic focus:outline-none placeholder-slate-400 border-slate-200 focus:border-slate-500'
            />
          </div>
          <button className='p-2 rounded-md font-semibold transition-all duration-300 bg-indigo-700 hover:bg-indigo-900 text-white'>
            Login
          </button>
        </form>
        <div className='flex flex-row space-x-1'>
          <p className='text-sm text-slate-900'>Don't have an account?</p>
          <Link to='/register' className='text-sm font-semibold transition-all duration-300 text-indigo-700 hover:text-indigo-900'>
            Register
          </Link>
        </div>
      </div>
    </div>
  )
}