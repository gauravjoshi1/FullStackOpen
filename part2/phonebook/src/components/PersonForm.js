const PersonForm = (props) => {

    const submitHandler = (event) => {
        event.preventDefault()
        
        const personObject = {
          name: props.newName,
          phone: props.newPhone
        }
    
        if (props.persons.some(person => person.name === props.newName)) {
          alert(`${props.newName} is already added to the phonebook`)
          props.setNewName('')
          props.setNewPhone('')
          return;
        }
    
        props.setPersons(props.persons.concat(personObject))
        props.setNewName('')
        props.setNewPhone('')
    }

    const handleNewName = (event) => {
        console.log(event.target.value)
        props.setNewName(event.target.value)
    }
    
    const handleNewPhone = (event) => {
        console.log(event.target.value)
        props.setNewPhone(event.target.value)
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
                    value={props.newPhone}
                    onChange={handleNewPhone}/>
            </div>
            <div>
                <button type="submit">add</button>
            </div>
      </form>
    )
}

export default PersonForm