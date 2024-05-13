const express = require('express')
const personRouter = express.Router()
const Person = require('../model/person.js');



personRouter.post('/', async (req, res) => {
    try {
        const data = req.body;
        const newPerson = new Person(data);
        const response = await newPerson.save()
        console.log('data saved');
        res.status(200).json(response)
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal Server Error' })
    }
})


personRouter.get('/', async (req, res) => {
    try {
        const data = await Person.find()
        console.log('data saved');
        res.status(200).json(data)
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal Server Error' })
    }
})

// Update Person

personRouter.put('/:id', async (req, res) => {
    try {
        const personId = req.params.id;
        const updatePersonData = req.body;

        const response = await Person.findByIdAndUpdate(personId, updatePersonData, {
            new: true,
            runValidators: true,
        })
        if (!response) {
            return res.status(404).json({ error: "Person not found" })
        }
        console.log('data updated');
        res.status(200).json(response)

    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal Server Error' })
    }
})


// Delete Person


personRouter.delete('/:id', async (req, res) => {
    try {
        const parsonId = req.params.id;

        const response = await Person.findByIdAndDelete(parsonId)
        if (!response) {
            return res.status(404).json({ error: 'Person not found!' })
        }
        console.log('data Deleted');
        res.status(200).json({ message: 'Person is Deleted' })
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal Server Error' })
    }
})

module.exports = personRouter