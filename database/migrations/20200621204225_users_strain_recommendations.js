
exports.up = function(knex) {
    return knex.schema
        .createTable('users_strain_recommendations', tbl => {
            tbl.integer('user_id');
            tbl.integer('strain_id', 128)
                .notNullable();
        })
};

exports.down = function(knex) {
    return knex.schema 
        .dropIfTableExists('users_strain_recommendations');
};
