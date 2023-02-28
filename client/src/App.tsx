import { Home, Login, Register } from '@/pages'
import { Link, Route, Routes } from 'react-router-dom'

export default function App() {
  return (
    <>
      <header className='h-16 w-full shadow flex flex-row justify-between items-center px-8 fixed bg-white'>
        <h1 className='select-none font-extrabold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-[#F34E39] to-[#00D8FF]'>Lara React</h1>
        <nav className='flex flex-row justify-between items-center space-x-5'>
          <Link to='/' className='text-slate-900 hover:text-slate-700 transition-all duration-300 font-medium'>Home</Link>
          <Link to='/register' className='text-slate-900 hover:text-slate-700 transition-all duration-300 font-medium'>Register</Link>
          <Link to='/login' className='text-slate-900 hover:text-slate-700 transition-all duration-300 font-medium'>Login</Link>
        </nav>
      </header>
      <main className='pt-16 w-full px-8'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </main>
    </>
  )
}
