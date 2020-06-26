const request = require('supertest');
const server = require('./server.js');


describe('server.js', () => {

    describe('base route', () => {

        it('return(200) from the base route', async () => {
            const expectedStatusCode = 200;

            const response = await request(server).get('/');

            expect(response.status).toEqual(expectedStatusCode);

        });


        it('return JSON object from the base route', async () => {
            const response = await request(server).get('/');

            expect(response.type).toEqual('application/json');
        });
    });
});