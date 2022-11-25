import { useEffect, useState } from 'react'
import Filter from './components/Filter'
import Notification from './components/Notification'
import Person from './components/Person'
import PersonForm from './components/PersonForm'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [number, setNumber] = useState('')
  const [checkName, setCheckName] = useState('')
  const [showAll, setShowAll] = useState(true)
  const [message, setMessage] = useState(null)

  const filterPeople = showAll ? persons : persons.filter(
    person => person.name.toLowerCase().includes(checkName.toLowerCase())  
  )
  
  useEffect(() => {
    personService
    .getAll()
    .then((updatedListOfPeople) => {
      setPersons(updatedListOfPeople)
    })
  }, [])

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message}/>
      <Filter 
        setCheckName={setCheckName} 
        checkName={checkName} 
        setShowAll={setShowAll}
      />

      <h3>add a new</h3>
      
      <PersonForm 
        newName={newName} 
        number={number}
        persons={persons}
        setPersons={setPersons}
        setNewName={setNewName}
        setNumber={setNumber}
        setMessage={setMessage}
      />
      
      <h3>Numbers</h3>

      <Person 
        filterPeople={filterPeople} 
        setPersons={setPersons} 
        persons={persons}
        setMessage={setMessage}
        />

    </div>
  )
}

export default App