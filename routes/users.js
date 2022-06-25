import express from 'express'
import { v4 as uuidv4 } from 'uuid'

const router = express.Router()
var users = []

router.get('/', (req, res) => res.send(users))

router.post('/', (req, res) => {
    const user = req.body
    users.push({ ...user, id: uuidv4() })
    res.send(`User with name ${user.firstname} added to the database!`)
})

router.get('/:id', (req, res) => {
    const { id } = req.params
    const foundUser = users.find((user) => user.id === id)
    res.send(foundUser)
})

router.delete('/:id', (req, res) => {
    const { id } = req.params
    users = users.filter((user) => user.id !== id)
    res.send(`User with the id ${id} deleted from the database!`)
})

router.patch('/:id', (req, res) => {
    const { id } = req.params
    const { firstname, lastname, age } = req.body
    var user = users.find((user) => user.id === id)

    if (firstname)
        user.firstname = firstname
    if (lastname)
        user.lastname = lastname
    if (age)
        user.age = age
    
    res.send(`User with the id ${id} has been updated!`)
})

export default router