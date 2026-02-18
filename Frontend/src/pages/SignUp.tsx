import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Link } from "react-router-dom"
import { useState } from "react"
import { toast } from "sonner"

export function SignUp() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async () => {
    try {
      if (!email || !name || !password) {
        toast.error("Please fill in all fields");
        return;
      }
      if (password.length < 6) {
        toast.error("Password must be at least 6 characters");
        return;
      }
      // TODO: Connect to actual signup API
      toast.success("Account created successfully!");
    } catch (error) {
      toast.error("Failed to create account. Please try again.");
      console.log("Some Error occurred", error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
        <Card className="w-full max-w-sm">
        <CardHeader>
            <CardTitle>Sign Up for an account</CardTitle>
            <CardDescription>
            Enter your details below to get Started
            </CardDescription>
        </CardHeader>
        <CardContent>
            <form>
            <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                />
                </div>
                <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    id="name"
                    type="text"
                    placeholder="Your Name"
                    required
                />
                </div>
                <div className="grid gap-2">
                <div className="flex items-center">
                    <Label htmlFor="password">Password</Label>
                </div>
                <Input 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    id="password" 
                    type="password" 
                    placeholder="Min 6 characters"
                    required 
                />
                </div>
            </div>
            </form>
        </CardContent>
        <CardFooter className="flex-col gap-2">
            <Button onClick={handleSignUp} type="submit" className="w-full">
            SignUp
            </Button>
            <Button variant="outline" className="w-full">
                <Link to="/signin">
                    Already have an account? SignIn
                </Link> 
            </Button>
        </CardFooter>
        </Card>
    </div>
  )
}
