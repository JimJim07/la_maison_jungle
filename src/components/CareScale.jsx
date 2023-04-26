import Sun 		from '../assets/sun.svg'
import Water 	from '../assets/water.svg'

// Ici, il s'agit d'une manière de faire.
//Vous auriez aussi pu utiliser une fonction qui retourne l'élément souhaité, ou bien faire directement des conditions
const quantityLabel = {
	1: 'peu',
	2: 'modérément',
	3: 'beaucoup'
}

function CareScale({ scaleValue, careType }) {
	const range = [1, 2, 3]
	const scaleType =
		careType === 'light' ? (
			<img width={20} height={20} src={Sun} alt='sun-icon' />
		) : (
			<img width={15} height={15} src={Water} alt='water-icon' />
		)

	function stopPro(e) {
		e.stopPropagation()
		alert(
			`Cette plante requiert ${quantityLabel[scaleValue]} ${careType === 'light' ? 'de lumière' : "d'arrosage"
			}`
		)
	}

	return (
		<div onClick={stopPro}>
			{range.map((rangeElem) =>
				scaleValue >= rangeElem ? (
					<span key={rangeElem.toString()}>{scaleType}</span>
				) : null
			)}
		</div>
	)
}

export default CareScale