import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Registerpage from './pages/register'
import Loginpage from './pages/login'
import Profilepage from './pages/profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Routes>
        <Route path='/register' element={<Registerpage/>}/>
        <Route path='/login' element={<Loginpage/>}/>
        <Route path='/profile' element={<Profilepage/>}/>
      </Routes>
    </div>
  )
}

export default App
