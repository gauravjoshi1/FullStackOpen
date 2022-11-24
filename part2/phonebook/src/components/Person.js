import personService from "../services/persons"

const RemovePerson =({person, setPersons, persons}) => {
    const removePersonHandler = () => {
        if (window.confirm(`Delete ${person.name}?`) == true) {
            personService
            .removePerson(person.id)
            .then(() => {
                setPersons(persons.filter(currentPerson => currentPerson.id !== person.id))
            })
        }
    }

    return (
        <button
            value={person.id} 
            onClick={removePersonHandler}>delete
        </button>
    )
}

const Person = ({filterPeople, setPersons, persons}) => {
    return (
        <ul>
            {filterPeople.map(person =>
            <p key={person.id}>{person.name} {person.number} 
                <RemovePerson
                    person={person}
                    setPersons={setPersons}
                    persons={persons}
                />
            </p>)}
        </ul>
    )
}

export default Person