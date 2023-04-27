import { useState } from 'react'
import '../styles/Footer.css'

function Footer() {
	const [inputValue, setInputValue] = useState('')

	function handleInput(e) {
		setInputValue(e.target.value)
	}

	function onClick() {
		if (!inputValue.includes('@')) {
			alert("Attention, il n'y a pas d'@, ceci n'est pas une adresse valide 😥")
		}
	}

	return (
		<footer className='footer'>
			<p>
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</p>
			<p>Laissez-nous votre mail :</p>
			<input
				className='footer__input'
				placeholder='Entrez votre mail'
				onChange={handleInput}
				value={inputValue}
			/>
            <button onClick={onClick} className="footer__btn">Valider 🌱</button>
		</footer>
	)
}

export default Footer