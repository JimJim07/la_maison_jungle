import CareScale from './CareScale'
import '../styles/Card.css'

export default function Card(plant) {

	function handleClick(plantName) {
		alert(`Vous voulez acheter 1 ${plantName} ? Très bon choix 🌱✨`)
	}

	return (
		<div onClick={() => handleClick(plant.name)}>
			<span className='card__price'>{plant.price}€</span>
			<img className='card__img' src={plant.cover} alt={`${plant.name} cover`} />
			<div className='card__order'></div>
			<div className="card__title">{plant.name}</div>
			<div>
				<CareScale careType='water' scaleValue={plant.water} />
				<CareScale careType='light' scaleValue={plant.light} />
			</div>
		</div>
	)
}