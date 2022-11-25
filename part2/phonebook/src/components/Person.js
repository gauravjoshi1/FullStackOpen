import personService from "../services/persons"

const RemovePerson =({person, setPersons, persons, setMessage}) => {
    const removePersonHandler = () => {
        if (window.confirm(`Delete ${person.name}?`) === true) {
            personService
            .removePerson(person.id)
            .then(() => {
                setPersons(persons.filter(currentPerson => currentPerson.id !== person.id))
            }).catch(() => {
                const deleteNotification = {
                    color: `red`,
                    content: `Information regarding ${person.name} has already been removed from the server`
                }

                setMessage(deleteNotification)

                setTimeout(() => {
                    setMessage(null)
                }, 8000)
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

const Person = ({filterPeople, setPersons, persons, setMessage}) => {
    return (
        <ul>
            {filterPeople.map(person =>
            <p key={person.id}>{person.name} {person.number} 
                <RemovePerson
                    person={person}
                    setPersons={setPersons}
                    persons={persons}
                    setMessage={setMessage}
                />
            </p>)}
        </ul>
    )
}

export default Person