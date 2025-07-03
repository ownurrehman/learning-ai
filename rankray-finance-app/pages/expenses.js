import { useEffect, useState } from 'react'

export default function Expenses() {
  const [expenses, setExpenses] = useState([])
  useEffect(() => {
    fetch('/api/expenses')
      .then(res => res.json())
      .then(setExpenses)
  }, [])

  return (
    <div>
      <h1>Expenses</h1>
      <ul>
        {expenses.map(exp => (
          <li key={exp.id}>{exp.description}: ${exp.amount}</li>
        ))}
      </ul>
    </div>
  )
}
