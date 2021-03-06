const request = require('supertest');
const app = require('./../server');
var assert = require('assert'); 

/**
 * Testing get books
 */
describe('GET /api/users/:id', function () {
    it('check with invalid user id', function (done) {
        request(app)
            .get('/api/users/:id')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .end(function(err, response) {
                if (err) { return done(err); }
                assert.strictEqual(response.status, 400);
                done();
            });
    });
});
