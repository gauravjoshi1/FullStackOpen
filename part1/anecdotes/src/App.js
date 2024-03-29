import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(Array(anecdotes.length).fill(0))
  const [popular, setPopular] = useState(0)

  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

  const randomIndx = () => {
    setSelected(getRandomInt(0, anecdotes.length))
  }

  const vote = () => {
    const refToArr = [...points]
    refToArr[selected] += 1
    setPoints(refToArr)
    mostVotes()
  }

  const mostVotes = () => {
    const arr = [...points]
    const maxVotes = Math.max(...arr)
    const maxIndex = arr.indexOf(maxVotes)

    setPopular(maxIndex)
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {points[selected]} votes</p>
      <div>
        <button onClick={vote}>Vote</button>
        <button onClick={randomIndx}>next anecdote</button>
      </div>
      <h2>Anecdote with most votes</h2>
      <p>{anecdotes[popular]}</p>
      <p>has {points[popular]} votes</p>
    </div>
  )
}

export default App