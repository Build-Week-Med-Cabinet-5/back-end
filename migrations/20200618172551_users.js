
exports.up = function(knex) {
    return knex.schema.createTable('users', tbl => {
        tbl.increments('id');
        tbl.string('first_name', 128)
            .notNullable();
        tbl.string('last_name', 128)
            .notNullable();
        tbl.string('email', 128)
            .notNullable();
        tbl.string('password', 128)
            .unique()
            .notNullable();
    })

    // -- Add tables for strains, varieties, and maybe recommendations?
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('users');
};
