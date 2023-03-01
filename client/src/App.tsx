import { Home, Login, Register } from '@/pages'
import { Link, Route, Routes } from 'react-router-dom'
import logo from '@/assets/logo.svg'

export default function App() {
  return (
    <>
      <header className='h-16 w-full shadow flex flex-row justify-between items-center px-8 fixed bg-white'>
        <Link to='/' className='flex flex-row items-center space-x-1'>
          <img src={logo} alt='Lara React' className='h-8' />
          <h1 className='select-none font-semibold text-2xl text-react-blue-500'>Lara React</h1>
        </Link>
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
