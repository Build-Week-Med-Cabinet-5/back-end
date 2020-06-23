
exports.up = function(knex) {
    return knex.schema
        .createTable('users', tbl => {
            tbl.increments('id');
            tbl.string('first_name', 128)
                .notNullable();
            tbl.string('last_name', 128)
                .notNullable();
            tbl.string('email', 128)
                .unique()
                .notNullable();
            tbl.string('password', 128)
                .notNullable();
        })
};

exports.down = function(knex) {
    return knex.schema
        .dropIfTableExists('users');
};
