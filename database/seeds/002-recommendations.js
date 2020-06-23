
exports.seed = function(knex) {
  // Inserts seed entries
    return knex('recommendations').insert([
      {
        user_id: 1, 
        strain_id: 4
      },
      {
        user_id: 2, 
        strain_id: 6
      },
      {
        user_id: 3, 
        strain_id: 8
      }

    ]);
};
