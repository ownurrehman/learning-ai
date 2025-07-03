export default function handler(req, res) {
  const data = [
    { id: 1, description: 'Rent', amount: 1000 },
    { id: 2, description: 'Utilities', amount: 300 }
  ]
  res.status(200).json(data)
}
