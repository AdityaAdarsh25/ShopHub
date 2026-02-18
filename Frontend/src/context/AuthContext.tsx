import { createContext, useContext, useState} from "react";
import type { SignInRequest } from "@/types/auth";
import type { UserSession } from "@/types/UserSession";
import { signIn } from "../api/auth";

interface AuthContextType{
    userSession: UserSession | null;
    isAuthenticated: boolean;
    isAdmin: boolean;
    login: (signInRequest: SignInRequest) => Promise<boolean>;
    logout: () => void;
}

const AuthContext=createContext<AuthContextType |undefined>(undefined); //we use createContext because we have to use AuthContext across various files,we cannot do this in useState

export const AuthProvider=({children}: {children:React.ReactNode})=>{  //react node means jitni bhi component available
    const[userSession,setUserSession]=useState<UserSession | null>(()=>{ //this is used when like if we refresh the page,then the context should not be lost
        const storedUser=localStorage.getItem("userSession"); //userSession is the key where we are storing user session in local storage
        return storedUser ? JSON.parse(storedUser) : null; //if storedUser exists,we parse else it returns null.
    })
    const login=async(signInRequest:SignInRequest): Promise<boolean>=>{
        try{
            const response = await signIn(signInRequest);
            const { email, token, name } = response.data;
            const session:UserSession = { email, token, name };
            setUserSession(session);
            localStorage.setItem("userSession", JSON.stringify(session));
            return true;
        } catch (error) {
            console.error("Login failed", error);
            return false;
        }
    }
    const logout=async()=>{
        setUserSession(null);
        localStorage.removeItem("userSession");
    };
    const getRolefromToken= (token:string)=>{
        if (!token) return "user";
        try {
            const base64Url = token.split(".")[1];
            if (!base64Url) return "user";

            // Standard JWTs use Base64URL, which atob sometimes struggles with.
            // This replaces URL-safe characters with standard Base64 characters.
            const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
            const payload = JSON.parse(window.atob(base64));
            
            return payload.role || "user";
    } catch (error) {
            console.error("Error decoding token:", error);
            return "user";
        }
};

//  AuthProvider value calculation:
const value = {
  userSession,
  isAuthenticated: !!userSession,
  // Use optional chaining (?.) and ensure a fallback
  isAdmin: userSession?.token ? getRolefromToken(userSession.token) === "ADMIN" : false,
  login,
  logout
};
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>; //children means all the components inside AuthProvider in App.tsx
};
export const useAuth= (): AuthContextType=>{
    const context=useContext(AuthContext);
    if(context===undefined){
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};