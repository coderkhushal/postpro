
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Post from './pages/Post'
import Login from './pages/Login'
import Signup from './pages/Signup'
import PostCreation from './pages/Postcreation'
import ResetPassword from './pages/ResetPassword'
import ResetPasswordMain from './pages/ResetPasswordMain'
import '../node_modules/shepherd.js/dist/css/shepherd.css';
function App() {
  
  return (
    

    <BrowserRouter>
    <Navbar/>
    <Routes>
      

      <Route path="/" element={<Home />} />
      <Route path="/post" element={<Post />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/postcreate" element={<PostCreation />} />
      <Route path="/reset-pass" element={<ResetPassword />} />
      <Route path="/reset-password/:token" element={<ResetPasswordMain />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
