const db = require('../database/dbConfig.js');
const Recommendations = require('./users-strain-recommendations-model.js');


describe('recommendations model', () => {

    beforeEach(async () => {
        await db('recommendations').truncate();
    })

    describe('insert()', () => {

        it('should insert recommendations into the db', async () => {

            await Recommendations.add({ strain_id: 2, user_id: 1 });
            await Recommendations.add({ strain_id: 1, user_id: 2 });

            const recommendations = await db('recommendations');

            expect(recommendations).toHaveLength(2);
        });
    });
});