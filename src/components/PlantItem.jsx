import CareScale from './CareScale'
import '../styles/PlantItem.css'

function PlantItem({ cover, name, water, light, price }) {

	function handleClick(plantName) {
		alert(`Vous voulez acheter 1 ${plantName} ? Très bon choix 🌱✨`)
	}

	return (
		<div className='item'  onClick={() => handleClick(name)}>
			<span className='price'>{price}€</span>
			<img className='img' src={cover} alt={`${name} cover`} />
			<div className='order'></div>
			<div className="title">{name}</div>
			<div>
				<CareScale careType='water' scaleValue={water} />
				<CareScale careType='light' scaleValue={light} />
			</div>
		</div>
	)
}

export default PlantItem