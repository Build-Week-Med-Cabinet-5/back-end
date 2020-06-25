exports.up = function(knex) {
    return knex.schema
        .createTable('users_strain_recommendations', tbl => {
            tbl.primary(['user_id', 'strain_id']);
            tbl.integer('user_id')
                .notNullable()
                .references('id')
                .inTable('users');
            tbl.integer('strain_id')
                .notNullable()
                .references('id')
                .inTable('strains');
        })
};

exports.down = function(knex) {
    return knex.schema 
        .dropIfTableExists('users_strain_recommendations');
};