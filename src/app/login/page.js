'use client'

// NEXT COMPONENTS
import Link from "next/link"
import { useRouter } from "next/navigation"


// SHADCN-UI COMPONENTS
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

// REACT COMPONENTS
import { useState } from "react"
import { useGlobalState } from "@/lib/globalStates";


export default function LoginPage() {
    const { setUserType, setCurrentUser, currentUser } = useGlobalState();
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const router = useRouter();
    const BACKEND_HOST = process.env.NEXT_PUBLIC_BACKEND_HOST;
    // const BACKEND_HOST = "https://carebite-backend-dsgqf7fceqc0gmcw.canadacentral-01.azurewebsites.net";
    // const BACKEND_HOST = "http://localhost:5000";
    const handleLogin = async (e) => {
        console.log(BACKEND_HOST);
        e.preventDefault()
        setError("")
        try {
            console.log(username, password);
            const res = await fetch(`${BACKEND_HOST}/api/auth/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, password }),
            })

            const data = await res.json()
            console.log(data);


            if (!res.ok) {
                throw new Error(data.message || "Login failed")
            }

            // Store token/user info if needed
            localStorage.setItem("token", data.token);
            localStorage.setItem("user", JSON.stringify(data.user));
            console.log("I am here")
            console.log(data.user);
            setCurrentUser(data.user);
            console.log(currentUser);


            // Redirect based on role or user type
            if (data.user.role === "Worker") {
                setUserType("Worker");
                router.push("/dashboard/worker")
            } else if (data.user.role === "Supervisor") {
                setUserType("Supervisor");
                router.push("/dashboard/supervisor")
            } else if (data.user.role === "General Manager Hospital") {
                setUserType("Supervisor");
                router.push("/dashboard/gmhosp")
            } else if (data.user.role === "General Manager Coordinator") {
                setUserType("gmcord");
                router.push("/dashboard/gmcord")
            } else if (data.user.role === "ADM") {
                setUserType("ADM");
                router.push("/dashboard/adm")
            } else {
                console.log(data.user.role);
                router.push("/dashboard1")
            }
        } catch (err) {
            setError('*Invalid username or password')
        }
    }


    return (
        <div className="flex  min-h-screen flex-col items-center justify-center bg-slate-50 p-4">
            <div className="w-full max-w-md">
                <div className="mb-6 flex flex-col items-center text-center">
                        <img src="/images/logo2.png" alt="Carebite Logo" className="h-24 w-24" />
                    {/* <div className="mb-2 flex h-16 w-16 items-center justify-center rounded-full"> */}
                    {/* </div> */}
                    {/* <h1 className="text-2xl font-bold text-slate-900">Carebite</h1> */}
                    {/* <p className="text-slate-600">Management System</p> */}
                    
                </div>

                <Card className="border rounded-lg shadow-sm bg-white">
                    <CardHeader className="pb-4 pt-6 px-6">
                        <CardTitle className="text-xl font-semibold">Staff Login</CardTitle>
                        <CardDescription className="text-sm text-slate-500">
                            Enter your credentials to access the management system
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="px-6">
                        <form>
                            <div className="grid gap-4">
                                <div className="grid gap-2">
                                    <Label htmlFor="username" className="text-sm font-medium">
                                        Username
                                    </Label>
                                    <Input
                                        id="username"
                                        type="text"
                                        placeholder="e.g. W123456"
                                        required
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        className="h-10 px-3 py-2 text-sm rounded-md border border-slate-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <div className="flex items-center justify-between">
                                        <Label htmlFor="password" className="text-sm font-medium">
                                            Password
                                        </Label>
                                        <Link href="/login/forgot-password" className="text-xs text-green-600 hover:underline">
                                            Forgot password?
                                        </Link>
                                    </div>
                                    <Input
                                        id="password"
                                        type="password"
                                        required
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="h-10 px-3 py-2 text-sm rounded-md border"
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    onClick={handleLogin}
                                    className={`w-full h-10 px-4 py-2 mt-2 text-sm font-medium text-white bg-green-600 hover:bg-green-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 ${!username || !password ? "opacity-50 cursor-not-allowed" : ""}`}
                                    disabled={!username || !password}
                                >
                                    Sign In
                                </Button>

                            </div>
                        </form>
                    </CardContent>
                    {error && (
                        <div className="px-6 pb-2 text-sm text-red-500">
                            {error}
                        </div>
                    )}
                    <CardFooter className="flex flex-col items-center gap-4 px-6 pt-2 pb-6 text-sm text-slate-600">
                        <div className="text-center text-xs">
                            Having trouble logging in? Contact system administrator at admin@carebite.com
                        </div>
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}