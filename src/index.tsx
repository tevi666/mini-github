import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './second.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store'

const rootElement = document.getElementById('root')

if (!rootElement) {
	throw new Error('root not found')
}

const root = createRoot(rootElement)
root.render(
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>
)
