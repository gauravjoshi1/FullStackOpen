import { useState } from 'react'
import Filter from './components/Filter'
import Person from './components/Person'
import PersonForm from './components/PersonForm'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [checkName, setCheckName] = useState('')
  const [showAll, setShowAll] = useState(true)
  
  // filter people if filter textbox is not empty
  const filterPeople = showAll ? persons : persons.filter(person => person.name.toLowerCase().includes(checkName.toLowerCase()))
  
  return (
    <div>
      <h2>Phonebook</h2>

      <Filter 
        setCheckName={setCheckName} 
        checkName={checkName} 
        setShowAll={setShowAll}
      />

      <h3>add a new</h3>
      
      <PersonForm 
        newName={newName} 
        newPhone={newPhone} 
        persons={persons}
        setPersons={setPersons}
        setNewName={setNewName}
        setNewPhone={setNewPhone}
      />
      
      <h3>Numbers</h3>

      <Person filterPeople={filterPeople}/>
    </div>
  )
}

export default App