import { useState } from 'react'
import { plantList } from '../datas/plantList'
import PlantItem from './PlantItem'
import Categories from './Categories'
import '../styles/ShoppingList.css'

function ShoppingList({ cart, updateCart }) {
	const [activeCategory, setActiveCategory] = useState('')
	const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)

	function addToCart(name, price, e) {
		// alert(`${name} a été ajouter au panier`)
		const currentPlantSaved = cart.find((plant) => plant.name === name)
		if (currentPlantSaved) {
			const cartFilteredCurrentPlant = cart.filter(
				(plant) => plant.name !== name
			)
			updateCart([
				...cartFilteredCurrentPlant,
				{ name, price, amount: currentPlantSaved.amount + 1 }
			])
		} else {
			updateCart([...cart, { name, price, amount: 1 }])
		}
		showAddToCart(name, e)
	}

	function showAddToCart(name, e) {
		const order = e.currentTarget.parentElement.querySelector('.order')
		order.textContent = `${name} ajouté au panier`
		order.classList.add('show')
		setTimeout(()=>{
		order.classList.remove('show')
		order.textContent = ``
		},2000)
	}

	return (
		<div className='lmj-shopping-list'>
			<Categories
				categories={categories}
				setActiveCategory={setActiveCategory}
				activeCategory={activeCategory}
			/>

			<ul className='lmj-plant-list'>
				{plantList.map(({ id, cover, name, water, light, price, category, cart }) =>
					!activeCategory || activeCategory === category ? (
						<li className='card' key={id}>
							<PlantItem
								cover={cover}
								name={name}
								water={water}
								light={light}
								price={price}
							/>
							<button onClick={(e) => addToCart(name, price, e)} className='lmj-plant-list-add'>Ajouter</button>
						</li>
					) : null
				)}
			</ul>
		</div>
	)
}

export default ShoppingList