
exports.up = function(knex) {
    return knex.schema
        .createTable('strain_recommendation', tbl => {
            tbl.increments('id');
            tbl.string('strain', 100)
                .notNullable();
        })
};

exports.down = function(knex) {
    return knex.schema
        .dropIfTableExists('strain_recommendation');
};
