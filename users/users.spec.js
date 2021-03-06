const db = require('../database/dbConfig.js');
const Users = require('./users-model.js');


describe('get users', () => {

    it('Should retrieve users from the DB', async () => {

        await Users.findAll();
        const users = await db('users');
        expect(users).toBe(users);
    });

    it('Should retrieve user by id from the DB', async () => {

        await Users.findById('id');
        const users = await db('users');
        expect(users).toBe(users);
    })

    it('Should remove the user from the DB', async () => {

        await Users.remove('id');
        const users = await db('users');
        expect(users).toBe(users);
    })
});