let express = require('express'),
    router = express.Router(),
    routes = require('../routes'),
    service = require('./service'),
    { body, validationResult } = require('express-validator');

router.post('/:username', (req, res) => {
    reqData = {
        user_name: req.params.username
    }
    service.verfifyUser(reqData, (data) => {
        res.send(data);
    }).catch(err => {
        console.error('Error in verfifyUser, with reqData - ', reqData, err);
    });
});

module.exports = router;