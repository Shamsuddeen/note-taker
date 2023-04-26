const express = require('express');
const router = express.Router();
const Note = require('../models/Note');

// Get all notes
router.get('/', async (req, res) => {
    const notes = await Note.find();
    res.render('index', { notes });
});

// Create a new note
router.post('/', async (req, res) => {
    const { title, content } = req.body;
    const note = new Note({ title, content });
    await note.save();
    res.redirect('/notes');
});

module.exports = router;