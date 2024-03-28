import axios from "axios";
import { useContext, createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState();
    const navigate = useNavigate();

    const login = async ({email, password}) => {
        try {
            const result = await axios.post("http://localhost:8000/utilisateur/login", {email, password});
            console.log(result);
            if(result.status){
                localStorage.setItem("token", result.data.token);
                setUser((result.data.user));
                console.log(user)
                navigate('/admin')
            } else {
                console.error(result.data.error);
            }
        } catch (error) {
            console.error(error);
        }
}


const value = { 
    user, 
    login 
};

return (
    <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
)
}
export default AuthContextProvider;


