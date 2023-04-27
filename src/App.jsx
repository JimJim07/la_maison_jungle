import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Cart from './components/Cart'
import ShoppingList from './components/ShoppingList'
import Footer from './components/Footer'

export default function App() {

	const savedCart = localStorage.getItem('cart')
	const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])
	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart))
	}, [cart])
	return (
		<React.Fragment>
			<Header>
				<Cart cart={cart} updateCart={updateCart} />
			</Header>
			<ShoppingList cart={cart} updateCart={updateCart} />
			<Footer />
		</React.Fragment>
	)
}