'use client'

// NEXT COMPONENTS
import Link from "next/link"
import Image from "next/image"


// SHADCN-UI COMPONENTS
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

// REACT COMPONENTS
import { Package2 } from 'lucide-react'
import { useState } from "react"


export default function LoginPage() {
    return (
        <div className="flex  min-h-screen flex-col items-center justify-center bg-slate-50 p-4">
            <div className="w-full max-w-md">
                <div className="mb-6 flex flex-col items-center text-center">
                    <div className="mb-2 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                        <img src="/images/logo.png" alt="Carebite Logo" className="h-8 w-8" />
                    </div>
                    <h1 className="text-2xl font-bold text-slate-900">Carebite</h1>
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
                                        type="username"
                                        placeholder="e.g. W23-X19910"
                                        required
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
                                        className="h-10 px-3 py-2 text-sm rounded-md border border-slate-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                    />
                                </div>
                                <Link href={"/dashboard"}>
                                    <Button
                                        type="submit"
                                        className="w-full h-10 px-4 py-2 mt-2 text-sm font-medium text-white bg-green-600 hover:bg-green-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                                    >
                                        Sign In
                                    </Button>
                                </Link>
                            </div>
                        </form>
                    </CardContent>
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