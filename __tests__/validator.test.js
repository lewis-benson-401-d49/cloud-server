'use strict';
const { app } = require('../src/server');
const supertest = require('supertest');
const request = supertest(app);
const validator = require('../src/middleware/validator');

describe('Validator for name query on "/person" endpoint', () => {
  let req = {
    query: {
      name: 'Lewis',
    },
  };
  let res = {};
  let next = jest.fn();

  it('calls next as expected', () => {
    validator(req, res, next);

    expect(next).toHaveBeenCalledWith();
    expect(next).not.toHaveBeenCalledWith('this is expected to fail');
  });

  it('responds with 200 code with query "/person?name=Lewis"', async () => {
    const response = await request.get('/person?name=Lewis');
    expect(response.status).toBe(200);
  });

  it('responds with 500 code with query "/person?name="', async () => {
    const response = await request.get('/person?name=');
    expect(response.status).toBe(500);
  });

  it('given a name in the query string, the output object is correct', async () => {
    const response = await request.get('/person?name=Lewis');
    expect(response.status).toBe(200);
    expect(typeof (response)).toEqual('object');
  });
});
