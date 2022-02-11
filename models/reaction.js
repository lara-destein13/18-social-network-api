const { Schema, model } = require('mongoose');

const reactionSchema = new Schema({
    reactionId: {
       // Use Mongoose's ObjectId data type
       // Default value is set to a new ObjectId
    },
    reactionBody: {
        type: String,
        required: true,
        maxlength: 280
    },
    userName: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        // use a getter method to format the timestamp on query
    },
});

