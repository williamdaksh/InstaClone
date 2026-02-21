import AppRoutes from "./AppRoutes";
import { AuthProvider } from "./feauters/auth.context";

const App = () => {

console.log("app")

    return (
        <AuthProvider>
            <AppRoutes />
        </AuthProvider>
      
        
    );
};

export default App;

