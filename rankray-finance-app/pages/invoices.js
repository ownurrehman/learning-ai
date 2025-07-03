import { useEffect, useState } from 'react'

export default function Invoices() {
  const [invoices, setInvoices] = useState([])
  useEffect(() => {
    fetch('/api/invoices')
      .then(res => res.json())
      .then(setInvoices)
  }, [])

  return (
    <div>
      <h1>Invoices</h1>
      <ul>
        {invoices.map(inv => (
          <li key={inv.id}>{inv.description}: ${inv.amount}</li>
        ))}
      </ul>
    </div>
  )
}
