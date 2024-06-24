import assert from 'assert';
import request from 'supertest';
import app from '../src/app.js';

describe('API Tests', () => {
  it('should get all cities', (done) => {
    request(app)
      .get('/api/cities')
      .expect(200)
      .end((err, res) => {
        assert.strictEqual(res.status, 200);
        assert(Array.isArray(res.body));
        done();
      });
  });

  it('should get all vehicles', (done) => {
    request(app)
      .get('/api/vehicles')
      .expect(200)
      .end((err, res) => {
        assert.strictEqual(res.status, 200);
        assert(Array.isArray(res.body));
        done();
      });
  });
});
