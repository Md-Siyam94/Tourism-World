import { createContext, useState } from "react";


export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const SignUpUser = (email, password ) ={
        // return
    }










    const authInfo = {
        name: "Siyam"
    }
    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;