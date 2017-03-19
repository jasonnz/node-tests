const request = require('supertest');
const expect = require('expect');
var app = require('./server').app;

describe('Server', ()=> {

    describe('GET /', ()=> {
        it('should return hello world repsonse', (done)=> {
            request(app)
            .get('/')
            .expect(404)
            .expect((res) => {
                expect(res.body).toInclude({
                    error: 'Page not found!'
                });
            })
            .end(done);
        });
    });  

    describe('GET /users', ()=> {
        it('should validate that a user exists in an array', (done)=> {
            request(app)
            .get('/users')
            .expect(200)
            .expect((res) => {
                expect(res.body).toInclude({name: 'Julia', age: 32});
            })
            .end(done);
        });
    });  

});


