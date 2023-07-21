const router = require('express').Router();
const {
    getThoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought
} = require('../../controllers/thoughtController');


// /api/thoughts
router.route('/').get(getThoughts).post(createThought);
// /api/thoughts
router.route('/:thoughtId')
    .get(getSingleThought)
    .put(updateThought)
    .delete(deleteThought);


// TODO: /api/thoughts/:thoughtId/reactions
    // POST CREATE A REACTION STORED IN A SINGLE THOUGHT'S REACTION ARRAY FIELD
    // DELETE TO PULL AND REMOVE A REACTION BY THE REACTION'S REACTIONiD VALUE
module.exports = router;