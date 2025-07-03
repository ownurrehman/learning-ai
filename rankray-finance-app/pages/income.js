import { useEffect, useState } from 'react'

export default function Income() {
  const [income, setIncome] = useState([])
  useEffect(() => {
    fetch('/api/income')
      .then(res => res.json())
      .then(setIncome)
  }, [])

  return (
    <div>
      <h1>Income</h1>
      <ul>
        {income.map(item => (
          <li key={item.id}>{item.source}: ${item.amount}</li>
        ))}
      </ul>
    </div>
  )
}
