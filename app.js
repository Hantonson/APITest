const express = require('express')
const app = express()

app.use(express.json())

let users = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Doe' }
]

// Endpoints de la API

app.get('/users', (req, res) => {
  res.json(users)
})

app.get('/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id))
  if (user) {
    res.json(user)
  } else {
    res.status(404).json({ message: 'User not found' })
  }
})

app.post('/users', (req, res) => {
  if(req.body.name){
      const newUser = {
      id: users.length + 1,
      name: req.body.name
    }
    users.push(newUser)
    res.status(201).json(newUser)
  } else {
    res.status(400).json({message: 'Cannot create user without a name'})
  }
})

app.put('/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id))
  if (user) {
    user.name = req.body.name
    res.json(user)
  } else {
    res.status(404).json({ message: 'User not found' })
  }
})

app.delete('/users/:id', (req, res) => {
  deletedUser = users.filter(u => u.id === parseInt(req.params.id))
  if(deletedUser && deletedUser.length !== 0){
      users = users.filter(u => u.id !== parseInt(req.params.id))
      res.status(204).send()
  }
  else {
    res.status(404).send()
  }
})

module.exports = app
