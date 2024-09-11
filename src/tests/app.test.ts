import request from 'supertest';
import server from '../index'; 

describe('GET /hello', () => {
  it('should return "Hello, World!" if no name is provided', async () => {
    const res = await request(server).get('/hello');
    expect(res.statusCode).toEqual(200);
    expect(res.body.greeting).toEqual('Hello, World!');
  });

  it('should return a personalized greeting if name is provided', async () => {
    const res = await request(server).get('/hello?name=Chris');
    expect(res.statusCode).toEqual(200);
    expect(res.body.greeting).toEqual('Hello, Chris');
  });
});

describe('GET /info', () => {
  it('should return system and request information', async () => {
    const res = await request(server).get('/info');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('time');
    expect(res.body).toHaveProperty('client_address');
    expect(res.body).toHaveProperty('host_name');
  });
});

afterAll(() => {
  server.close();
});
