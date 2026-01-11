import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Registerpage from './pages/register'
import Loginpage from './pages/login'
import Profilepage from './pages/profile'
import Authpage from './pages/authpage/authpage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Routes>
        <Route path='/register' element={<Registerpage/>}/>
        <Route path='/login' element={<Loginpage/>}/>
        <Route path='/profile' element={
          <Authpage>
            <Profilepage/>
          </Authpage>
          }/>
      </Routes>
    </div>
  )
}

export default App
