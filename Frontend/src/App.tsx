import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from "./pages/Home"
import { SignIn } from './pages/SignIn'
import { AuthProvider } from './context/AuthContext'
import Dashboard from './pages/Dashboard'
import { SignUp } from './pages/SignUp'
import { Toaster } from 'sonner'

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Toaster position="top-right" />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider> //writing AuthProvider here so we can authenticate the entire application
    //the content is written inside AuthContext
  )
}
 
export default App
// when we use {} we do inline export. when we use export default we create the function and export at the end
//so basically export function Signin(){} requires { SignIn} and export default SignIn requires only SignIn