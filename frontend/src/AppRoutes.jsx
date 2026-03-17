import {createBrowserRouter} from 'react-router-dom'
import Login from './feauters/auth/pages/Login'
import SignUp from './feauters/auth/pages/SignUp'
import Feed from './feauters/post/page/Feed'


export const router = createBrowserRouter ([
    {
        path:'/',
        element:<h1>welcome to the home page</h1>
    },
    {
        path:'/login',
        element:<Login/>
    },
    {
        path:'/register',
        element:<SignUp/>
    },
    {
        path:'/feed',
        element:<Feed/>
    }
])
