import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './index.css'
// @ts-ignore
import Logo from './logo.png'
import HomePage from './pages/HomePage'
import FavouritesPage from './pages/FavouritesPage'
import Navigation from './components/Navigation'

const App = () => {
	return (
        <>
            <Navigation />
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/favourites' element={<FavouritesPage />} />
			</Routes>
		</>
	)
}

export default App
