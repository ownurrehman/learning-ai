import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <nav className="navbar">
        <Link href="/income">Income</Link>
        <Link href="/invoices">Invoices</Link>
        <Link href="/expenses">Expenses</Link>
      </nav>
      <main>
        <h1>Rank Ray Finance Dashboard</h1>
        <p>Welcome to your finance dashboard. Use the links above to manage your finances.</p>
      </main>
    </div>
  )
}
