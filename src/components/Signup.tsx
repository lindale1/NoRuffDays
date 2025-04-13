"use client";
import * as React from "react";
function Signup (){
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="flex flex-col justify-center items-center text-center rounded-2xl p-6">
                <h2 className="text-2xl font-bold mb-2">Sign up today!</h2>
                <form className="w-full max-w-sm space-y-4">
                    <input type="text" 
                    placeholder="Full Name" 
                    className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2" />
                    <input type="email" 
                    placeholder="Email" 
                    className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 " />
                    <input type="password" 
                    placeholder="Password" 
                    className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 " />
                    <button type="submit" 
                    style= {{ backgroundColor: '#8FBFDA' }}
                    className="w-full text-white py-2 rounded-xl ">Sign Up</button>
                </form>
            </div>
        </div>
    );
}
export default Signup;