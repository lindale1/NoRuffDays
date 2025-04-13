"use client";
import * as React from "react";
function Login (){
    return (
        <div className="min-h-screen flex items-center justify-center">
        
            <div className="flex flex-col justify-center items-center text-center">

            <h2 className="text-2xl font-bold">Welcome Back!</h2>
            <p className="mb-6 text-gray-600">Log in</p>
            <form className="w-full max-w-sm space-y-4">
                <input type="email" 
                placeholder="Email" 
                className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 " />
                <input type="password" 
                placeholder="Password" 
                className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 " />
                <button 
                style= {{ backgroundColor: '#8FBFDA' }}
                type="submit" 
                className="w-full text-white py-2 rounded-xl ">Login</button>
            </form>
            </div>

            
        </div>
       
    );
}
export default Login;