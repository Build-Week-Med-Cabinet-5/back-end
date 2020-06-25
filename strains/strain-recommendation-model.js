const db = require('../database/dbConfig.js');


const find = () => {
    return db('strain_recommendation');
};

const findBy = property => {
    return db('strain_recommendation')
        .where(property)
};

function add(strain) {
    return db('strain_recommendation').insert(strain).returning('*');
};


module.exports = {
    find, findBy, add
}