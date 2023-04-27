import '../styles/Categories.css'

function Categories({ categories, setActiveCategory, activeCategory }) {
	return (
		<div className='categories'>
			<select
				value={activeCategory}
				className='categories__select'
				onChange={(e) => setActiveCategory(e.target.value)}
			>
				<option value=''>Toutes les plantes</option>
				{categories.map((cat) => (
					<option key={cat} value={cat}>
						{cat}
					</option>
				))}
			</select>
			<button className='categories__btn' onClick={() => setActiveCategory('')}>Réinitialiser</button>
		</div>
	)
}

export default Categories