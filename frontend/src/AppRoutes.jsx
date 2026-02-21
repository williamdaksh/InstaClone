import { Route, Routes } from "react-router-dom"
import Login from "./feauters/pages/Login"
import SignUp  from './feauters/pages/SignUp'

const AppRoutes = () => {
  return (
        
    <Routes>
        <Route path="/" element={<h1>Welcome to the home page</h1>} />      
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<SignUp/>} />
    </Routes>
  )
}

export default AppRoutes
