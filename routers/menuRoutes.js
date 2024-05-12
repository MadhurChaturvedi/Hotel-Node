const express = require('express')
const routerMenu = express.Router()
const MenuItem = require('../model/menu.js');
const { route } = require('./personRoutes.js');


// Create Menu
routerMenu.post('/', async (req, res) => {
    try {
        const data = req.body;
        const menuItem = new MenuItem(data);
        const response = await menuItem.save()
        res.status(200).json(response)
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal Server Error' })
    }
})

// GET all menu
routerMenu.get('/', async (req, res) => {
    try {
        const data = await MenuItem.find()
        console.log('data saved');
        res.status(200).json(data)
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal Server Error' })
    }
})

// Get Test List by Taste Type
routerMenu.get('/:tasteType', async (req, res) => {
    try {
        // 'sweet', 'spicy', 'sour'
        const tasteType = req.params.tasteType;
        if (tasteType == 'sweet' || tasteType == 'spicy' || tasteType == 'sour') {
            const response = await MenuItem.find({ taste: tasteType })
            res.status(200).json(response)
        }
        else {
            res.status(404).json({ message: 'invalid Ingredient' })
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal Server Error' })
    }
})



module.exports = routerMenu