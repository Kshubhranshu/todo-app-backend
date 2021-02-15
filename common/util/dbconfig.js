const NodeCouchDb = require('node-couchdb');
const config = require('../appConfig');

const couch = new NodeCouchDb({
    auth: {
        user: config.DB_USER,
        password: config.DB_PASSWORD
    }
});

couch.listDatabases().then(dbs =>
    // test db connection
    // console.log('Databases list:- ', dbs)
    dbs
);

module.exports = {
    couch
}

