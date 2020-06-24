
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('strain_recommendation').del()
    .then(function () {
      // Inserts seed entries
      return knex('strain_recommendation').insert([
        {
          user_id: 1,
          strain: 'Chocolate Gold'
        },
        {
          user_id: 2,
          strain: 'Blueberry Yum Yum'
        },
        {
          user_id: 3,
          strain: 'Sky High'
        },
      ]);
    });
};