const request = require('supertest');
const app = require('../../src/app');

describe('ONG', () => {
  it('should be able to create a new ONG', async () => {
    const response = await request(app)
      .post('/ongs')
      .send({
        name: "SPAS",
        email: "ong@ong.com",
        whatsapp: "19971015718",
        cidade: "Indaiatuba",
        uf: "SP"
      });
      
  });
});
