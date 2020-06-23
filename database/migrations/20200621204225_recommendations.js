
exports.up = function(knex) {
    return knex.schema
        .createTable('recommendations', tbl => {
            tbl.integer('user_id');
            tbl.integer('strain_id', 128)
                .notNullable();
        })
};

exports.down = function(knex) {
    return knex.schema 
        .dropIfTableExists('recommendations');
};
