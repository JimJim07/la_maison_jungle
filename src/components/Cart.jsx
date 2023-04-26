import { useState, useEffect } from 'react'
import '../styles/Cart.css'

export default function Cart({ cart, updateCart }) {
	const [isOpen, setIsOpen] = useState(true)
	const total = cart.reduce((acc, plant) => acc + plant.amount * plant.price,0)
	useEffect(() => {
		document.title = `LMJ: ${total}€ d'achats`
	}, [total])

	return isOpen ? (
		<div className='cart'>
			<div className="container">
				<button
					className='toggle-btn'
					onClick={() => setIsOpen(false)}
				>
					Fermer
				</button>
				{cart.length > 0 ? (
					<div>
						<h2>Panier</h2>
						<ul>
							{cart.map(({ name, price, amount }, index) => (
								<div key={`${name}-${index}`}>
									{name} {price}€ x {amount}
								</div>
							))}
						</ul>
						<h3>Total :{total}€</h3>
						<button className='delete-btn' onClick={() => updateCart([])}>Vider le panier</button>
					</div>
				) : (
					<div>Votre panier est vide</div>
				)}
			</div>
		</div>
	) : (
		<div className='closed'>
			<button
				className='toggle-btn'
				onClick={() => setIsOpen(true)}
			>
				Panier
			</button>
		</div>
	)
}