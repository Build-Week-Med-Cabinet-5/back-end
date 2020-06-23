const db = require('../database/dbConfig.js');


function add(recommendation) {
    return db('recommendations').insert(recommendation).returning('*');
};

function findByUserId(id) {
    return db('recommendations').select('user_id').where({ user_id: id });
};

function remove(user_id) {
    return db('recommendations').delete().where({ user_id })
}


module.exports = {
    add, findByUserId, remove
};