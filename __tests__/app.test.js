const request = require('supertest')
const app = require('../app.js')

describe('Testing root path', () => {
    test('It should respond to the GET method with code 200', () => {
        return request(app).get('/')
        .expect(200)
    })
})

describe('GET /api/fen/ with FEN params string', () => {
    test('It should respond to the GET method with code 200', () => {
        return request(app).get('/api/fen/r1bqkbnr/pppp1ppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R')
        .expect(200)
    })
})

describe('POST /api/fen/ with FEN string JSON', () => {
    test('It should respond to the POST method with code 200', () => {
        let fenJson = {
            fen: "r1bqkbnr/pppp1ppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R"
        }
        return request(app).post('/api/fen/')
        .send(fenJson)
        .expect(200)
    })
})

describe('Testing chess board rendering ability', () => {
    test('It return a page with the correct FEN string applied', () => {
        return request(app).get('/api/fen/r1bqkbnr/pppp1ppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R')
        .then((res) => {
            expect(res.text).toMatch(/r1bqkbnr\/pppp1ppp\/2n5\/1B2p3\/4P3\/5N2\/PPPP1PPP\/RNBQK2R/)
        })
    })
})