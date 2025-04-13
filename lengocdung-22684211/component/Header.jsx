import { useState } from 'react'
import '../src/App.css'

function Header() {
  
  return (
    <>
      <div className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img src="https://www.svgrepo.com/show/306403/chef.svg" alt="Cheffify Logo" className="h-6 w-6"  />
        <span className="text-pink-600 font-bold text-xl">Cheffify</span>
      </div>

      {/* Search bar */}
      <div className="flex items-center flex-grow mx-6 max-w-md">
        <input
          type="text"
          placeholder="What would you like to cook?"
          className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-pink-300"
        />
      </div>

      {/* Nav links */}
      <nav className="hidden md:flex space-x-6 text-sm font-medium text-gray-700">
        <a href="#" className="hover:text-pink-600">What to cook</a>
        <a href="#" className="hover:text-pink-600">Recipes</a>
        <a href="#" className="hover:text-pink-600">Ingredients</a>
        <a href="#" className="hover:text-pink-600">Occasions</a>
        <a href="#" className="hover:text-pink-600">About Us</a>
      </nav>

      {/* Buttons */}
      <div className="flex items-center space-x-3 ml-4">
        <button className="text-sm text-pink-600 hover:underline">Login</button>
        <button className="bg-pink-500 text-white px-4 py-2 rounded-full text-sm hover:bg-pink-600">
          Subscribe
        </button>
      </div>
    </div>
    </>
  )
}

export default Header
  
