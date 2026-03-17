import { AuthProvider } from "./feauters/auth/auth.context";
import { router }  from './AppRoutes'
import { RouterProvider } from "react-router-dom";
import { PostContextProvider } from "./feauters/post/post.context";


const App = () => {

console.log("app")

    return (
        <AuthProvider>
            <PostContextProvider>
                 <RouterProvider router={router} />
            </PostContextProvider>
        </AuthProvider>
      
        
    );
};

export default App;

