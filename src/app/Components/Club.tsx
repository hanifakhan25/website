// components/ClubJoin.js  
import React from "react";

// components/ClubJoin.js  

export default function ClubJoin() {  
    return (  
      <div className="flex flex-col items-center justify-center w-auto h-[481px] max-w-auto mx-auto p-6 ">  
        <h2 className="text-xl font-bold mb-2">Join the club and get the benefits</h2>  
        <p className="mt-5 text-center mb-4">  
        Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more  
        </p>  
        <div className="flex gap-2">  
          <input  
            type="email"  
            placeholder="yourname@example.com"  
            className="mt-10 border rounded-md p-2 w-full max-w-[300px]"  
          />  
          <button className="mt-10 bg-black text-white rounded-md px-8 py-2">  
            Signup  
          </button>  
        </div>  
      </div>  
    );  
  }