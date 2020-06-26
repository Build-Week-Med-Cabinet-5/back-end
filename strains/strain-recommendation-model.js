const db = require('../database/dbConfig.js');


const find = () => {
    return db('strain_recommendation');
};

const findBy = property => {
    return db('strain_recommendation').where(property)
};

function findById(id) {
    return db('strain_recommendation').where({ id }).first()
};

function add(strain) {
    return db('strain_recommendation').insert(strain).returning('*');
};

function remove(id) {
    return db('strain_recommendation').delete().where({ id });
};


module.exports = {
    find, findBy, findById, add, remove
}