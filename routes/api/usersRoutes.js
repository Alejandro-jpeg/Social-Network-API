const router = require('express').Router();
const {
    getUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser
} = require('../../controllers/userController');

// /api/users
router.route('/').get(getUsers).post(createUser);
// /api/users/:userId
router.route('/:userId')
    .get(getSingleUser)
    .put(updateUser)
    .delete(deleteUser);

//TODO: :userId/friends/:friendId
    //POST TO ADD A NEW FRIEND TO A USERS FRIEND LIST
    //DELETE TO REMOVE A FRIEND FROM A USERS FRIEND LIST

module.exports = router;