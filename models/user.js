const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true, 
        // must match a valid email address (look into Mongoose's mathcing validation)
    },
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'thought'
        }
    ],
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'user'
        }
    ]
});

// create the user model using the userSchema
const user = model('user', userSchema);

// export the user model
module.exports = user;