import assert from 'assert';
import request from 'supertest';
import app from '../src/app.js';
import * as vehicleModel from '../src/models/vehicleModel.js';

describe('Vehicle Controller Tests', () => {
  describe('GET /api/vehicles', () => {
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

  describe('Vehicle Model Integration', () => {
    it('should return all vehicles from model', () => {
      const vehicles = vehicleModel.getVehicles();
      assert(Array.isArray(vehicles));
      assert(vehicles.length > 0);
    });

    it('should find a vehicle by kind from model', () => {
      const vehicle = vehicleModel.getVehicleByKind('EV Bike');
      assert(vehicle);
      assert.strictEqual(vehicle.kind, 'EV Bike');
    });
  });
});
