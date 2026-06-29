const request = require('supertest');
const assert = require('assert');
const app = require('../server');

describe('Todo API endpoints', () => {
  it('should fetch all todos', async () => {
    const res = await request(app).get('/api/todos');
    
    // Check status code and data type using assert
    assert.strictEqual(res.statusCode, 200);
    assert.strictEqual(Array.isArray(res.body), true);
  });

  it('should create a new todo', async () => {
    const res = await request(app)
      .post('/api/todos')
      .send({ text: 'Test via GitHub Actions' });
      
    // Check status code and property using assert
    assert.strictEqual(res.statusCode, 201);
    assert.strictEqual(res.body.text, 'Test via GitHub Actions');
  });
});
