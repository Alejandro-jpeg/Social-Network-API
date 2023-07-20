const { User, Thought } = require('../models');

module.exports = {
//GET ALL USERS
async getUsers(req, res) {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json(err);
    }
},
//GET SINGLE USER BY TS _ID
async getSingleUser(req, res) {
    try {
        const user = await Users.findOne({_id:req.params.userId });
        if(!user){
            return res.status(404).json({message: 'not a single user found that matches that id'})
        }
        res.json(user);
    } catch (err) {
        res.status(500).json(err);
    }
},
//CREATE A NEW USER
async createUser(req, res) {
    try {
        const user = await User.create(req.body);
        res.json(user);
    } catch (err) {
        res.status(500).json(err);
    }
},
//UPDATE A USER BY ITS _ID
async updateUser(req, res){
    try {
        const user = await User.findOneAndUpdate(
            {_id: req.params.userId},
            {$set: req.body.username },
            {runValidators: true, new: true}
        );
        if(!user){
            return res.status(404).json({message: 'not a single user found that matches that id'})
        }
        res.json(user);
    } catch (err) {
        res.status(500).json(err);
    }
},
//DELETE TO REMOVE A USER BY THE _ID
async deleteUser(req, res) {
    try {
        const user = await User.findOneAndDelete({_id: req.params.userId});
        if(!user){
            return res.status(404).json({message: 'not a single user found that matches that id'})
        }
        await Thought.deleteMany({_id: {$in: user.thoughts} });
        res.json({ message: 'user and its thoughts have been erased' })
    } catch (err) {
        res.status(500).json(err);
    }
},
};