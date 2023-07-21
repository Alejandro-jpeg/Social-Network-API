const {Thought, User } = require('../models');

module.exports = {
    //GET ALL THOUGHTS
    async getThoughts(req, res) {
        try {
            const thoughts = await Thought.find();
            res.json(thoughts);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    //GET A THOUGHT BY ITS ID
    async getSingleThought(req, res) {
        try {
            const thought = await Thought.findOne({_id:req.params.ThoughtId });
            if(!thought){
                return res.status(404).json({message: 'not a single Thought found that matches that id'})
            }
            res.json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    //CREATING A NEW THOUGHT
    async createThought(req, res) {
        try {
            const thought = await Thought.create(req.body);
            const user = await User.findOneAndUpdate(
                { _id: req.body.userId },
                { $addToSet: {thoughts: thought._id} },
                { new: true }
            );
            if (!user) {
                return res.status(404).json({
                  message: 'Thought created, but found no user with that ID',
                })
              }

            res.json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    //UPDATING A THOUGHT BY ITS ID
    async updateThought(req, res){
        try {
            const thought = await Thought.findOneAndUpdate(
                {_id: req.params.thoughtId},
                {$set: req.body },
                {runValidators: true, new: true}
            );
            if(!thought){
                return res.status(404).json({message: 'not a single thought found that matches that id'})
            }
            res.json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    //DELETING A THOUGHT
    async deleteThought(req, res) {
        try {
            const thought = await Thought.findOneAndDelete({_id: req.params.thoughtId});
            if(!thought){
                return res.status(404).json({message: 'not a single thought found that matches that id'})
            }
        } catch (err) {
            res.status(500).json(err);
        }
    },
};