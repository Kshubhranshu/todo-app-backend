let express = require('express'),
    router = express.Router(),
    routes = require('../routes'),
    service = require('./service');

    router.get('/:user-name', (req, res) => {
        reqData = {
            user_name: req.params
        }
        service.verfifyUser(reqData, (data) => {
            res.send(data);
        }).catch(err => {
            console.error('Error in verfifyUser, with reqData - ', reqData, err);
        });
    });    

    router.exports = router;