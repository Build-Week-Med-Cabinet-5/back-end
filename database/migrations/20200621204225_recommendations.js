
exports.up = function(knex) {
    const r = 'recommended';
    return knex.schema
        .createTable('recommendations', tbl => {
            tbl.increments('id');
            tbl.string('first_name', 128)
            tbl.string('last_name', 128)
            tbl.string('desired_effects', 250)
                .notNullable();
            tbl.string(`${r}_strain`, 250)
                .notNullable();
            tbl.string(`${r}_rating`, 250);
            tbl.string(`${r}_strain_effects`, 250)
                .notNullable();
            tbl.string(`${r}_flavor`, 250);
            tbl.string(`${r}_description`, 250);
        })
};

exports.down = function(knex) {
    return knex.schema 
        .dropIfTableExists('recommendations');
};
