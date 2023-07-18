const router = require('express').Router();

router.get('/', async(req, res) =>{
    try {
        res.send('USERS')
    } catch (err) {
        console.log(err)
    }
});

module.exports = router;