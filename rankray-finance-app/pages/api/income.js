export default function handler(req, res) {
  const data = [
    { id: 1, source: 'Salary', amount: 5000 },
    { id: 2, source: 'Freelance', amount: 1200 }
  ]
  res.status(200).json(data)
}
