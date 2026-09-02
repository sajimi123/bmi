
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Landingpage from './pages/Landingpage'
function App() {
  
  return (
    <>
    <Routes>
      <Route path='/' element={<Landingpage/>}/>
   
    </Routes>
    </>
  )
}

export default App
