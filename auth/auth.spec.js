const db = require('../database/dbConfig.js');
const User = require('../users/users-model.js');
const { expectCt } = require('helmet');


const mockUser = {
    first_name: 'Joe',
    last_name: 'Johnson',
    email: 'jj@gmail.com',
    password: 'jjtestpassword'
}

describe('register new user', () => {

    it('should create a new validated user', async () => {
        const users = await db('users');
        expect(users).toHaveLength(7);
        await User.add(mockUser);
        expect(await db('users')).toHaveLength(8);
    });

    it('should return the data that was inserted', async () => {
        const createdUser = await User.add(mockUser);
        expect(createdUser.email).toBe('jj@gmail.com');
    })
})