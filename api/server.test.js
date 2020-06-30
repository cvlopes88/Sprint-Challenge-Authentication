const request = require('supertest');

const server = require('./server');

describe('server', () =>{
    describe('api/auth/register', () =>{
        it('should return status 500', () =>{
            return request(server)
            .post('/api/auth/register')
            .send({username: 'mark', password: 'password'})
            .then(response =>{
                expect(response.status).toBe(500);
            })
        })

        it('should return an id', () =>{
            return request(server)
            .post('/api/auth/register')
            .send({username: 'mike', password: 'password'})
            .then(response =>{
                expect(response.body.id);
                expect(response.body.username);
            })
        })
    })

    describe('api/auth/login', () =>{
        it('should return status 200', () =>{
            return request(server)
            .post('/api/auth/login')
            .send({username: 'mark', password: 'password'})
            .then(response =>{
                expect(response.status).toBe(401);
            })
        })

        it('should return a token', () =>{
            return request(server)
            .post('/api/auth/login')
            .send({username: 'mike', password: 'password'})
            .then(response =>{
                expect(response.body.token);
            })
        })
    })

    describe('api/jokes', () =>{
        it('should return status 400', () =>{
            return request(server)
            .get('/api/jokes')
            .then(response =>{
                expect(response.status).toBe(400);
            })
        })

        it('should return jokes', () =>{
            return request(server)
            .get('/api/jokes')
            .then(response =>{
                expect(response.body.joke);
            })
        })
    })
})