let util = require('../common/util/util'),
    dao = require('./dao');

async function verfifyUser(reqData, callback) {
    const userName = reqData.user_name;
    let userResult = await dao.getUser(userName);
    callback(util.successResponse(userResponse));
}

module.exports = {
    verfifyUser
}