const bcrypt = require('bcryptjs');

// 000-cleanup cleans all existing tables
exports.seed = function(knex) {
    // Inserts seed entries
    return knex('users').insert([
      {
        first_name: 'Seth',
        last_name: 'Nelson',
        email: 'sethn@medcab.com',
        password: bcrypt.hashSync('snmed1', 8)
      },
      {
        first_name: 'John',
        last_name: 'Daily',
        email: 'johnd@medcab.com',
        password: bcrypt.hashSync('jdmed2', 8)
      },
      {
        first_name: 'Amy',
        last_name: 'Beisel',
        email: 'amyb@medcab.com',
        password: bcrypt.hashSync('abmed3', 8)
      },
      {
        first_name: 'Regina',
        last_name: 'Dircio',
        email: 'reginad@medcab.com',
        password: bcrypt.hashSync('rdmed4', 8)
      },
      {
        first_name: 'Matthew',
        last_name: 'Martin',
        email: 'matthewm@medcab.com',
        password: bcrypt.hashSync('mmmed5', 8)
      },
      {
        first_name: 'Nicholas',
        last_name: 'Chikuji',
        email: 'nicholasc@medcab.com',
        password: bcrypt.hashSync('ncmed6', 8)
      },
      {
        first_name: 'Tony',
        last_name: 'Odele',
        email: 'tonyo@medcab.com',
        password: bcrypt.hashSync('tomed7', 8)
      },
      
    ]);
};


// relational database for recommendations -> link them
// backend will save preferences of recommendations
