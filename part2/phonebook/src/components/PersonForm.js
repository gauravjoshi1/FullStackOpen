const PersonForm = (props) => {

    const submitHandler = (event) => {
        event.preventDefault()
        
        const personObject = {
          name: props.newName,
          number: props.number
        }
    
        if (props.persons.some(person => person.name === props.newName)) {
          alert(`${props.newName} is already added to the phonebook`)
          props.setNewName('')
          props.setNumber('')
          return;
        }
    
        props.setPersons(props.persons.concat(personObject))
        props.setNewName('')
        props.setNumber('')
    }

    const handleNewName = (event) => {
        console.log(event.target.value)
        props.setNewName(event.target.value)
    }
    
    const handleNewPhone = (event) => {
        console.log(event.target.value)
        props.setNumber(event.target.value)
    }


    return (
        <form onSubmit={submitHandler}>
            <div>
                name: 
                <input 
                    value={props.newName}
                    onChange={handleNewName}/>
            </div>
            <div>
                numbers:
                <input 
                    type = "tel" 
                    pattern="[0-9\-]+"
                    value={props.number}
                    onChange={handleNewPhone}/>
            </div>
            <div>
                <button type="submit">add</button>
            </div>
      </form>
    )
}

export default PersonForm