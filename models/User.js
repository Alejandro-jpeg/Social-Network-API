const { Schema, model } = require('mongoose');

const userSchema = new Schema(
{
    username: { type: String, unique: true, required: true, trim: true },
    email: { type: String, unique: true, required: true, match: [/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Please enter a valid email'] },
    thoughts:[
        {
        type: Schema.Types.ObjectId,
        ref: 'thought'
        },
    ],
    friends:[
        {
            type: Schema.Types.ObjectId,
        ref: 'user'
        },
    ],
},
{
    toJSON:{
        virtuals: true,
    },
    id: false,
}
);

userSchema.virtual('friendCount').get(function(){ return this.friends.length });

const User = model('user', userSchema);

module.exports = User;