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


module.exports = {
    find, findBy, findById, add
}