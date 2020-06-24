const db = require('../database/dbConfig.js');


const find = () => {
    return db('strain-recommendation');
};

const findBy = property => {
    return db('strain-recommendation')
        .where(property)
};

function add(strain) {
    return db('strain-recommendation').insert(strain).returning('*');
};


module.exports = {
    find, findBy, add
}