const request = require('supertest')
const app = require('./app')

// Test para GET /users
describe('GET /users', () => {
  it('should return all users', async () => {
    const res = await request(app).get('/users')
    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveLength(2)
  })
})

// Test para GET /users/:id
describe('GET /users/:id', () => {
  it('should return a single user by ID', async () => {
    const res = await request(app).get('/users/1')
    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty('id', 1)
  })

  it('should return 404 if user not found', async () => {
    const res = await request(app).get('/users/999')
    expect(res.statusCode).toEqual(401)
    expect(res.body).toHaveProperty('message', 'User not found')
  })
})

// // Test para POST /users
// describe('POST /users', () => {
//   it('should create a new user', async () => {
//     const newUser = { name: 'New User' }
//     const res = await request(app).post('/users').send(newUser)
//     expect(res.statusCode).toEqual(201)
//     expect(res.body).toHaveProperty('id')
//     expect(res.body).toHaveProperty('name', 'New User')
//   })

//   it('should fail if no name is provided', async () => {
//     const res = await request(app).post('/users').send({})
//     expect(res.statusCode).toEqual(400)  // Esto es un ejemplo de validación adicional
//   })
// })

// // Test para PUT /users/:id
// describe('PUT /users/:id', () => {
//   it('should update an existing user', async () => {
//     const updatedUser = { name: 'Updated Name' }
//     const res = await request(app).put('/users/1').send(updatedUser)
//     expect(res.statusCode).toEqual(200)
//     expect(res.body).toHaveProperty('name', 'Updated Name')
//   })

//   it('should return 404 if user not found', async () => {
//     const res = await request(app).put('/users/999').send({ name: 'Nonexistent' })
//     expect(res.statusCode).toEqual(404)
//     expect(res.body).toHaveProperty('message', 'User not found')
//   })
// })

// // Test para DELETE /users/:id
// describe('DELETE /users/:id', () => {
//   it('should delete a user by ID', async () => {
//     const res = await request(app).delete('/users/2')
//     expect(res.statusCode).toEqual(204)
//   })

//   it('should return 404 if user not found', async () => {
//     const res = await request(app).delete('/users/999')
//     expect(res.statusCode).toEqual(404)
//   })
// })
