import {Routes,Route} from 'react-router-dom'
import Login from './feauters/pages/Login'
import SignUp from './feauters/pages/SignUp'
const App = () => {
  return (
  
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<SignUp/>}/>
    </Routes>

  )
}

export default App
