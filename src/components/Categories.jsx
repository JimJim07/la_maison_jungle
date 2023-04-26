import '../styles/Categories.css'

function Categories({ categories, setActiveCategory, activeCategory }) {
	return (
		<div className='lmj-categories'>
			<select
				value={activeCategory}
				className='lmj-select'
				onChange={(e) => setActiveCategory(e.target.value)}
			>
				<option value=''>Toutes les plantes</option>
				{categories.map((cat) => (
					<option key={cat} value={cat}>
						{cat}
					</option>
				))}
			</select>
			<button onClick={() => setActiveCategory('')}>Réinitialiser</button>
		</div>
	)
}

export default Categories