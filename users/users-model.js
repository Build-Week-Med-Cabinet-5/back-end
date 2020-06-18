const db = require('../database/dbConfig.js');

// functions like function find(), findById(id), and add(user)
function findAll() {
    return db('users');
};

function findBy(filter) {
    return db('users').where(filter);
};

function findById(id) {
    return db('users').where({ id }).first();
};

async function add(user) {
    return await db('users').insert(user).returning('*');
};

function update(id, changes) {
    return db('users').where({ id }).update(changes, '*');
};

function remove(id) {
    return db('users').delete().where({ id });
}

module.exports = {
    findAll, findBy, findById, add, update, remove
}