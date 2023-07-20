const router = require('express').Router();

router.get('/', async(req, res) =>{
    try {
        res.send('USERS')
    } catch (err) {
        console.log(err)
    }
});

//TODO: 
//GET ALL USERS

//GET SINGLE USER BI TS _ID
//POST A NEW USER
//PUT TO UPDATE A USER BY ITS _ID
//DELETE TO REMOVE A USER BY THE _ID


//TODO: :userId/friends/:friendId
//POST TO ADD A NEW FRIEND TO A USERS FRIEND LIST
//DELETE TO REMOVE A FRIEND FROM A USERS FRIEND LIST

module.exports = router;