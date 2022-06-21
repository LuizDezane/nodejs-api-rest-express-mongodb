const {server, http, port} = require('../src/server');

it("testando servidor",() => {
expect(typeof server).toBe('object')
});