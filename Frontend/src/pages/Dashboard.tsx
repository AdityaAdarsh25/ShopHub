import { useAuth } from "@/context/AuthContext";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import Navbar from "../components/layout/Navbar";

const Dashboard=()=>{
    const navigate=useNavigate();
    const { isAuthenticated } = useAuth();
    useEffect(()=>{
        if(!isAuthenticated){
            navigate("/signin");
        }
    },[isAuthenticated,navigate]);
    return(
        <div>
            <Navbar/>
        </div>
    )
}
export default Dashboard