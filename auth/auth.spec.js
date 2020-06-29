const db = require('../database/dbConfig.js');
const server = require('../api/server.js');
const request = require('supertest');


const mockUser = {
    first_name: 'Jack',
    last_name: 'Sparrow',
    email: 'theblackpearl@gmail.com',
    password: 'drinkUpMeHardyJoHo'
}

describe('register and login auth functions', () => {

    beforeEach(async () => {
        await db('users').truncate();
    });

    it('should create a new validated user', () => request(server)
        .post('/api/auth/register')
        .send(mockUser)
        .then((res) => {
            expect(res.status).toBe(201);
        })
    );

    it('should return a 400 error due to not enough user info', () => request(server)
        .post('/api/auth/register')
        .send({ first_name: 'Jeb', last_name: 'Adiah', password: 'notfunnyjeb' })
        .then((res) => {
            expect(res.status).toBe(400);
        })
    );

})