const db = require('../data/db-config.js')

module.exports = {
    find,
    findById
}

// find
function find() {
    return db('schemes')
}
// findById
function findById(id) {
    return db('schemes')
    .where({ id })
    .first();
}
// findSteps
// add
// update
// remove