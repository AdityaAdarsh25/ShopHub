import axios from "axios";

import type { SignInRequest } from "@/types/auth"

const api=axios.create({baseURL:"http://localhost:8080"}); //cannot use https here,since that will throw a PROTOCOL error because our backend is on http

// // api.interceptors.request.use((config) => {
// //     if(config.url?.startsWith("api/v1/auth/")){
// //         return config;
// //     }
// //     const UserSession=localStorage.getItem("userSession");
// //     if(UserSession){
// //         const {token}=JSON.parse(UserSession); //destructuring token from user session
// //     }
    

// // })
export const signIn= (signInRequest:SignInRequest)=>{ //note here we are using =,coz its not default and const defines a variable which requires a value assigned to it
    return api.post("/api/v1/auth/login",signInRequest); //we are accepting signInRequest as input,and then that follows the shape of SignInRequest interface in auth.ts in types.
}