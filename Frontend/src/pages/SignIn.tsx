import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { useState } from "react"
import { useAuth } from "../context/AuthContext"
import { useNavigate } from "react-router"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "sonner"

export function SignIn() {
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const navigate=useNavigate();
    const { login } = useAuth();
    const handleLogin=async()=>{
        try{
            if (!email || !password) {
                toast.error("Please fill in all fields");
                return;
            }
            const success=await login({email,password});
            if(success){
                toast.success("Login successful!");
                navigate("/dashboard");
            }else{
                toast.error("Invalid credentials. Please try again.");
            }
        }
        catch(error){
            toast.error("An error occurred. Please try again later.");
            console.log("Some Error occured",error);
        }
    };

  return (
    <div className="flex justify-center items-center h-screen">
        <Card className="w-full max-w-sm">
        <CardHeader>
            <CardTitle>Login to your account</CardTitle>
            <CardDescription>
            Enter your email below to login to your account
            </CardDescription>
            <CardAction>
                <Link to="/signup">
                    <Button variant="link">Sign Up</Button>
                </Link>
            </CardAction>
        </CardHeader>
        <CardContent>
            <form>
            <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                />
                </div>
                <div className="grid gap-2">
                <div className="flex items-center">
                    <Label htmlFor="password">Password</Label>
                    <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                    >
                    Forgot your password?
                    </a>
                </div>
                <Input 
                    value={password} 
                    onChange={(e)=>setPassword(e.target.value)} 
                    id="password" 
                    type="password" 
                    required 
                />
                </div>
            </div>
            </form>
        </CardContent>
        <CardFooter className="flex-col gap-2">
            <Button onClick={handleLogin} type="submit" className="w-full">
            Login
            </Button>
            <Button variant="outline" className="w-full">
            Login with Google
            </Button>
        </CardFooter>
        </Card>
    </div>
  )
}
