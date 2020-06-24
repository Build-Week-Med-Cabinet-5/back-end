const router = require('express').Router();
const Recommendations = require('./users-strain-recommendations-model.js');
const usersStrainRecommendationsModel = require('./users-strain-recommendations-model.js');


// -- Recommenation endpoints here!! -- //

// GET user recommendation by ID
// untested
router.get('/:id/recommendations', (req, res) => {
    Recommendations
        .findByUserId(req.params.id)
        .then(recommendation => {
            if (typeof recommendation === 'undefined') {
                res.status(404).json({ message: 'Recommendation could not be found.' });
            } else {
                res.status(200).json(recommendation);
            }
        })
        .catch(err => res.status(500).json({ errorMessage: 'Could not retrieve user recommendation', err}));
});

// POST user recommendation by ID
// untested
router.post('/:id/recommendations', (req, res) => {
    const recommendations = { user_id: parseInt(req.params.id), ...req.body }
    return Recommendations.add(recommendations)
        .then(async () => {
            const strain = await usersStrainRecommendationsModel.findByUserId({ id: recommendations.strain_id }).first()
            res.status(201).json({ message: `The strain ${strain.strain} has been added.`, recommendations });
        })
        .catch(err => console.log(500).json({ errorMessage: 'Error adding the recommendation.', err }));
});

// DELETE user recommendation by ID
// untested
router.delete('/:id/recommendations', (req, res) => {
    const { user_id } = req.params;

    Recommendations.remove(user_id)
        .then(user_id => {
            if (user_id === 0) {
                res.status(400).json({ errorMessage: 'The user with that id does not exist.'})
            } else {
                res.status(200).json({ message: 'The user recommendation has been deleted.' });
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ errorMessage: 'Error removing the user recommendation.', err})
        })
});


module.exports = router;