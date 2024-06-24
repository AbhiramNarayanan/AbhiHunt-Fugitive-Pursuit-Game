import assert from 'assert';
import request from 'supertest';
import app from '../src/app.js';
import * as cityModel from '../src/models/cityModel.js';

describe('City Controller Tests', () => {
  describe('GET /api/cities', () => {
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
  });

  describe('City Model Integration', () => {
    it('should return all cities from model', () => {
      const cities = cityModel.getCities();
      assert(Array.isArray(cities));
      assert(cities.length > 0);
    });

    it('should find a city by name from model', () => {
      const city = cityModel.getCityByName('Yapkashnagar');
      assert(city);
      assert.strictEqual(city.name, 'Yapkashnagar');
    });
  });
});
