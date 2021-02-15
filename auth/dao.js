const { couch } = require('../common/util/dbconfig');
const dbName = require('../common/appConfig').DB_DATABASE;
const dbUrl = require('../common/util/dbUrl');

async function getUser(userName) {
    const result = await couch.post(dbName, dbUrl.DB_URL.find);
    return result;
}

module.exports = {
    getUser
}