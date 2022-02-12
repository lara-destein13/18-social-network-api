const { Schema, model } = require('mongoose');

const thoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280
    },
    createdAt: {
        type: Date,
        default: Date.now,
        // use a getter method to format the timestamp on query
    },
    username: {
        type: String,
        required: true
    },
    reactions: []
});

// create the user model using the userSchema
const thought = model('thought', thoughtSchema);

// export the user model
module.exports = thought;