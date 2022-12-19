'use strict';
const { app } = require('../src/server');
const supertest = require('supertest');
const request = supertest(app);

describe('API Server', () => {
  it('handles root path', async () => {
    const response = await request.get('/');

    expect(response.status).toBe(200);
    expect(response.text).toBeTruthy();
    expect(response.text).toEqual('Hello World');
  });

  it('handles invalid requests', async () => {
    const response = await request.get('/foo');
    expect(response.status).toBe(404);

  });

  it('handles root path', async () => {
    const response = await request.get('/bad');
    expect(response.status).toBe(500);
    expect(response.body.route).toEqual('/bad');
  });
  it('works with query params and the "/person" route', async () => {
    const response = await request.get('/person?name=Lewis');
    expect(response.status).toBe(200);
    expect(typeof (response)).toEqual('object');
  });

});
