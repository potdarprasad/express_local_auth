const router = require('express').Router();
const Notes = require('../models/notes.model');

router.get('/', async (req, res) => {
    const notes = await Notes.find();
    res.render('notes/index', {notes})
});

router.route('/create').get((req, res) => {
    res.render('notes/create')
}).post(async(req, res) => {
    const newNote = new Notes(req.body);
    await newNote.save();

    res.redirect('/notes');
});

router.route('/edit/:id').get(async (req, res)=>{
    const note = await Notes.findById(req.params.id);
    res.render('notes/edit', {note});
}).post((req, res)=>{
    console.log('param', req.params.id);
    console.log('body', req.body);
})

module.exports = router;