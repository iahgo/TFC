
// //Mocha Unit Test
const assert = require('assert');
const request = require('supertest');
const { app } = require('../app');

describe('MatchesController', () => {
  describe('GET /matches', () => {
    it('should return a 200 status code', async () => {
      const res = await request(app).get('/matches');
      assert.equal(res.status, 200);
    });
  });

  describe('GET /matches/:id', () => {
    it('should return a 200 status code', async () => {
      const res = await request(app).get('/matches/5');
      assert.equal(res.status, 200);
    });
  });

  describe('POST /matches', () => {
    it('should return a 422 status code with an invalid token', async () => {
      const res = await request(app)
        .post('/matches')
        .set('Authorization', 'invalid-token');
      assert.equal(res.status, 422);
    });
  });

  describe('PUT /matches/:id', () => {
    it('should return a 404 status code', async () => {
      const res = await request(app).put('/matches/3');
      assert.equal(res.status, 404);
    });
  });

  describe('PUT /matches/:id/result', () => {
    it('should return a 404 status code', async () => {
      const res = await request(app).put('/matches/3/result').send({
        homeTeamGoals: 3,
        awayTeamGoals: 2,
      });
      assert.equal(res.status, 404);
    });
  });
});
