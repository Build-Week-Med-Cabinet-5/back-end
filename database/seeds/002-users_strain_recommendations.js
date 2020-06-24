
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users_strain_recommendations').del()
    .then(function () {
  // Inserts seed entries
      return knex('users_strain_recommendations').insert([
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
    });
};
