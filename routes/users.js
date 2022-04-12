const express = require("express");
const router = express.Router();
const User = require('../models/user');

router.get('/', async (req, res) => {
    console.log("getting users")
    try {
        const users = await User.find();
        res.json(users);
    } catch (e) {
        res.send('Error ' + e);
    }
});

router.get('/:id', async (req, res) => {
    console.log("getting users")
    try {
        const user = await User.findById(req.params.id);
        res.json(user);
    } catch (e) {
        res.send('Error ' + e);
    }
});

router.post('/', async (req, res) => {
    const user = new User(req.body);
    try {
        const u1 = await user.save();
        res.send(u1);
    } catch (e) {
        res.send('Error ' + e);
    }
});

router.patch('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        user.name = req.body.name || user.name
        const user1 = await user.save();
        res.send(user1);
    } catch (e) {
        res.send('Error ' + e);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        user.deleteOne();
        res.send('success');
    } catch (e) {
        res.send('Error ' + e);
    }
});

module.exports = router;