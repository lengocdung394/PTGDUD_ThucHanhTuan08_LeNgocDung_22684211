import { useState } from 'react'
import './App.css'
import Header from '../component/Header.jsx'
import RecipeHighlight from '../component/RecipeHighlight.jsx'
import HomePage from '../component/HomePage.jsx'
function App() {
 

  return (
    <>
      <Header />
      <RecipeHighlight />
      <HomePage />
    </>
  )
}

export default App
