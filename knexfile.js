// Update with your config settings.

const pgConnection = process.env.DATABASE_URL || "postgresql://postgres@localhost/users";

module.exports = {
  
  development: {
    client: 'sqlite3',
    useNullAsDefault: true, // needed for sqlite
    connection: {
      filename: './database/dev_med_cab.db3'
    },
    migrations: { directory: './database/migrations' },
    seeds: { directory: './database/seeds' },
  },

  staging: {
    client: 'pg',
    connection: process.env.DB_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  testing: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './database/dev_med_cab_test.db3',
    },
    migrations: {
      directory: './database/migrations',
    },
    seeds: { 
      directory: './database/seeds' 
    },
  },

  production: {
    client: 'pg',
    connection: pgConnection,
    // process.env.DB_URL
    migrations: {
      directory: './database/migrations',
    },
    seeds: { directory: './database/seeds' },
  },
};



// --- Base code for non-env deployment --- //

// module.exports = {

//   development: {
//     client: 'sqlite3',
//     connection: {
//       filename: './dev.sqlite3'
//     }
//   },

//   staging: {
//     client: 'postgresql',
//     connection: {
//       database: 'my_db',
//       user:     'username',
//       password: 'password'
//     },
//     pool: {
//       min: 2,
//       max: 10
//     },
//     migrations: {
//       tableName: 'knex_migrations'
//     }
//   },

//   production: {
//     client: 'postgresql',
//     connection: {
//       database: 'my_db',
//       user:     'username',
//       password: 'password'
//     },
//     pool: {
//       min: 2,
//       max: 10
//     },
//     migrations: {
//       tableName: 'knex_migrations'
//     }
//   }

// };
