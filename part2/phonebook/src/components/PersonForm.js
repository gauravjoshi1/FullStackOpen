
import personService from "../services/persons"

const PersonForm = ({newName, number, persons, setPersons, setNewName, setNumber, setMessage}) => {

    const submitHandler = (event) => {
        event.preventDefault()
        
        const personObject = {
          name: newName,
          number: number
        }
            
        const personIdLocator = (newName) => {
            const personFromList = persons.find(person => person.name === newName)
            return personFromList.id
        }
        
        const changedPersonNumber = (newName, newNumber) => {
            const personFromList = persons.find(person => person.name === newName)
            const changedPersonInfo = {...personFromList, number: newNumber}
            return changedPersonInfo
        }

        const confirmUpdate = (newName) => {
            return window.confirm(`${newName} is already in the phonebook, replace the new number with a new one?`)
        }

        if (persons.some(person => person.name === newName) && confirmUpdate(newName)) {
            personService
            .updatePersonNumber(personIdLocator(newName), changedPersonNumber(newName, number))
            .then(returnedObject => {
                setPersons(persons.map(
                    updatedPerson => updatedPerson.name === newName ? returnedObject : updatedPerson)
                )
            })

            setNewName('')
            setNumber('')

            const updatedNotification = {
                color: `green`,
                content: `Updated ${personObject.name}'s number successfully`
            }

            setMessage(updatedNotification)
        
            setTimeout(() => {
                setMessage(null)
            }, 5000)

            return;
        } 
        
        else {
            personService
            .addNewPerson(personObject)
            .then(newPersonObject => {
                console.log(newPersonObject)
                setPersons(persons.concat(newPersonObject))
                setNewName('')
                setNumber('')
                
                const notification = {
                    color: `green`,
                    content: `Added ${personObject.name} successfully`
                }

                setMessage(notification)

                setTimeout(() => {
                    setMessage(null)
                }, 5000)
            })
        }
    }

    const handleNewName = (event) => {
        console.log(event.target.value)
        setNewName(event.target.value)
    }
    
    const handleNewPhone = (event) => {
        console.log(event.target.value)
        setNumber(event.target.value)
    }

    return (
        <form onSubmit={submitHandler}>
            <div>
                name: 
                <input 
                    value={newName}
                    onChange={handleNewName}/>
            </div>
            <div>
                numbers:
                <input 
                    type = "tel" 
                    pattern="[0-9\-]+"
                    value={number}
                    onChange={handleNewPhone}/>
            </div>
            <div>
                <button type="submit">add</button>
            </div>
      </form>
    )
}

export default PersonForm