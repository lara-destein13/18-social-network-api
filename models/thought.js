const { Schema, model, Types } = require('mongoose');

const ReactionSchema = new Schema(
    {
        // set custom id to avoid confusion with parent comment _id
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()            
        },
        reactionBody: {
            type: String,
            required: true
        },
        username: {
            type: String,
            required: true,
            trim: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => dateFormat(createdAtVal)
        }
    },
    {
        toJSON: {
            getters: true
        }
    }
);

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
    reactions: [ReactionSchema]
});

thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

// create the user model using the userSchema
const thought = model('thought', thoughtSchema);

// export the user model
module.exports = thought;