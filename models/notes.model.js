const mongoose = require('mongoose');

const notesSchema = mongoose.Schema({
    title: {
        type: String
    },
    description: {
        type: String
    }
}, {
    timestamps: true
});


module.exports = mongoose.model('notes', notesSchema);