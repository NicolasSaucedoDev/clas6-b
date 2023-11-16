import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
// import {Contador, Formulario, Navbar} from './components'
import { useEffect } from 'react'
import Formulario from './components/Formulario'
import Contador from './components/Contador'
import Navbar from './components/Navbar'

function App() {
  useEffect (() => {
    console.log('Cargo App')
  }, [])

  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <div className='logiots'>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route path="/formulario" element={<Formulario />}></Route>
          <Route path="/contador" element={<Contador />}></Route>
        </Route>
      </Routes>
      
    </BrowserRouter>
  )
}

export default App
