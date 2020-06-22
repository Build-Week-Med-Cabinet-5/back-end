
exports.seed = function(knex) {
  // Inserts seed entries
    return knex('recommendations').insert([
      {
        user_id: 1, 
        desired_effects: 'sleepy, relaxing, tired',
        recommended_strain: 'Sleeping Beauty',
        recommended_strain_effects: 'hazy, tired, relaxing'
      },
      {
        user_id: 2, 
        desired_effects: 'painless, euphoric, trippy',
        recommended_strain: 'Grandmas-Special-Cookies',
        recommended_strain_effects: 'euphoric, trippy, hazy, painless, cloudy'
      },
      {
        user_id: 3, 
        desired_effects: 'giggly, tingly, uplifted',
        recommended_strain: 'Oz-Poppy-Fields',
        recommended_strain_effects: 'giggly, tingly, uplifted, happy'
      }

    ]);
};
