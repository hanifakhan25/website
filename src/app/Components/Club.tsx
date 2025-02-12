import React from "react";

export default function ClubJoin() {
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-screen-lg mx-auto p-6 text-center">
      <h2 className="text-2xl font-bold mb-2">Join the club and get the benefits</h2>
      <p className="mt-5 mb-4 max-w-md text-gray-700">
        Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop-up stores, and more.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
        <input
          type="email"
          placeholder="yourname@example.com"
          className="border border-gray-300 rounded-md p-3 w-full"
        />
        <button className="bg-black text-white rounded-md px-6 py-3 hover:bg-gray-800 transition">
          Signup
        </button>
      </div>
    </div>
  );
}

