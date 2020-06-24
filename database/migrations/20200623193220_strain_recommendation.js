
exports.up = function(knex) {
    return knex.schema
        .createTable('strain_recommendation', tbl => {
            tbl.increments('id');
            tbl.integer('user_id');
            tbl.string('strain')
                .notNullable();
        })
};

exports.down = function(knex) {
    return knex.schema
        .dropIfTableExists('strain_recommendation');
};
