import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Auth from './Page/Auth'
import Success from './Page/Success'
import {Toaster}  from "react-hot-toast"
import Youtuber from './Page/Youtuber'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='auth'element={<Auth/>} />
          <Route path='success'element={<Success/>} />
          <Route path='/Youtuber/*'element={<Youtuber/>} />
      </Routes>
      <Toaster 
        position="top-right"
        reverseOrder={false}
      />
    </BrowserRouter>
  )
}

export default App