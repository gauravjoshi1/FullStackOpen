
const Part = ({ part }) => 
<p>
  {part.name} {part.exercises}
  
</p>

const Header = ({ courseName }) => <h1>{courseName}</h1>

const Content = ({ parts }) => 
<>
    {parts.map(part => 
        <Part key={part.id} part={part} />)}
</>

const Total = ({ parts }) => {

    const total = parts.reduce((sum, {exercises}) => sum + exercises, 0)
    console.log(total)
    
    return (
        <>  
            <p><b>Total of {total} exercises </b></p>
        </>
    )
}

const Course = ({course}) => {
    return (
        <>
            <Header courseName={course['name']} />
        
            <div>
                <Content parts={course['parts']} />
            </div>

            <Total parts={course['parts']} />
        </>
    )
}

export default Course
