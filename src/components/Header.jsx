import '../styles/Header.css'
import logo from '../assets/logo.png'

export default function Header({children}) {
	
	function darkMode() {
		const body = document.querySelector('body')
		body.classList.toggle('dark')
	}

	return (
		<header className='header'>
			<div className="header__container">
				<div className='header__wrapper'>
					<img className='header__logo' onClick={() =>darkMode()} src={logo} alt='La maison jungle' width={45} height={45}/>
					<h1 className='header__heading'>La maison jungle</h1>
				</div>
				{children}
			</div>
		</header>
	)
}