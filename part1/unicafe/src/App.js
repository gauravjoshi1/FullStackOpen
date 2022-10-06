import { useState } from 'react'

const Button = (props) => {
  return (
    <>
      <button onClick={props.onClick}>{props.text}</button>
    </>
  )
}

const StatisticLine = ({text, value}) => {
  return (
    <>
      <td colSpan={5}>
        {text}
      </td>
      <td>
        {value}
      </td>
    </>
  )
}

const Statistics = ({good, neutral, bad}) => {

  if (good + neutral + bad === 0) {
    return (
      <div>
        <h2>statistics</h2>
        <p>No feedback given</p>
      </div>
    )
  }

  const total = good + neutral + bad
  const positive = (good * 100/(good + neutral + bad)) + '%' 
  const avg = (good - bad)/total

  return (
    <div>
      <h2>statistics</h2>
      <table>
        <tbody>
          <tr>
            <StatisticLine text="good" value = {good}/>
          </tr>
          <tr>
            <StatisticLine text="neutral" value = {neutral}/>
          </tr>
          
          <tr>
            <StatisticLine text="bad" value = {bad}/>
          </tr>

          <tr>
            <StatisticLine text="all" value={total}/>
          </tr>

          <tr>
            <StatisticLine text="average" value={avg} />
          </tr>

          <tr>
            <StatisticLine text="positive" value={positive}/>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const updateGood = () => {
    setGood(good + 1)
  }

  const updateNeutral = () => {
    setNeutral(neutral + 1)
  }

  const updateBad = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={updateGood} text='good'/>
      <Button onClick={updateNeutral} text='neutral'/>
      <Button onClick={updateBad} text='bad'/>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App