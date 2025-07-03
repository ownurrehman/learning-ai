export default function handler(req, res) {
  const data = [
    { id: 1, description: 'Website project', amount: 2000 },
    { id: 2, description: 'Consulting', amount: 1500 }
  ]
  res.status(200).json(data)
}
