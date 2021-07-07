const db = require('../data/db-config.js')

module.exports = {
    find,
    findById,
    add,
    update,
    remove
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
function add(scheme) {
    return db('schemes')
    .insert(scheme)
    

}
// update
function update(changes, id) {
    return db('schemes')
    .where({ id })
    .update(changes)
}
// remove
function remove(id) {
    return db('schemes')
    .where('id', id)
    .del()
}