const Person = ({filterPeople}) => {
    return (
        <ul>
            {filterPeople.map(person =>
            <p key={person.name}>{person.name} {person.phone}</p>)}
        </ul>
    )
}

export default Person