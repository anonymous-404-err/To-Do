const request = require('supertest');
const app = require('../server');

describe('Todo API endpoints', () => {
  it('should fetch all todos', async () => {
    const res = await request(app).get('/api/todos');
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('should create a new todo', async () => {
    const res = await request(app)
      .post('/api/todos')
      .send({ text: 'Test via GitHub Actions' });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('text', 'Test via GitHub Actions');
  });
});
