import React, { useState, useEffect } 	from 'react'
import Banner 				from './components/Banner'
import logo 				from './assets/logo.png'
import Cart 				from './components/Cart'
import ShoppingList 		from './components/ShoppingList'
import Footer 				from './components/Footer'
import './styles/Layout.css'

function App() {
	const savedCart = localStorage.getItem('cart')
	const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])
	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart))
	}, [cart])
	return (
		<React.Fragment>
			<Banner>
				<img src={logo} alt='La maison jungle' className='lmj-logo' />
				<h1 className='lmj-title'>La maison jungle</h1>
			</Banner>
			<main className='lmj-layout-inner'>
				<Cart cart={cart} updateCart={updateCart} />
				<ShoppingList cart={cart} updateCart={updateCart} />
			</main>
			<Footer />
		</React.Fragment>
	)
}

export default App