import { type ReactNode } from "react";
import { Navigate } from "react-router";


const PrivateRouteComponent: React.FC<{children: ReactNode}> = ({ children }) => {
    

    function checkUserAuthentication(){
        if (localStorage.getItem("token")){
            return true;
        }

        return false;

    };

    const isAuthenticated = checkUserAuthentication();
    
    return isAuthenticated ? children : <Navigate to="/auth/login"/>
    
}

export default PrivateRouteComponent;


// This custom component simply checks if we have a token in localstorage.
// If a token is found that means the user is authenticated and can proceed to the other routes.
// If the user is not authenticated then they are redirected back to the login page.