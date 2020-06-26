const db = require('../database/dbConfig.js');
const Strains = require('./strain-recommendation-model.js');


describe('strains model', () => {

    beforeEach(async () => {
        await db('strain_recommendation').truncate();
    })

    describe('insert()', () => {

        it('Insert the strains into the db', async () => {

            await Strains.add({ strain: 'Cali Cookie Kush' });
            await Strains.add({ strain: 'Purple Haze' });

            const strains = await db('strain_recommendation');

            expect(strains).toHaveLength(2);
        });
    });
});