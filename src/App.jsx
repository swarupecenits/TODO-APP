import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Signup, Login, Profile, TodoForm, Todos } from '../src/components'
import './index.css';


function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
