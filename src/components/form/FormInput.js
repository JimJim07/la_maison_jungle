// Formulaires non contrôlés

function FormInput() {

    function handleSubmit(e) {
        e.preventDefault()
        alert(e.target['my_input'].value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type='text' name='my_input' defaultValue='Tapez votre texte' />
            <button type='submit'>Entrer</button>
        </form>
    )
}

export default FormInput