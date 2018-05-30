const express = require('express')
    ,   bodyParser = require('body-parser')
const ejs = require('ejs').renderFile

// App to be exported
const app = express()

// Configuration
app.use(express.static(__dirname + '/public/'));
app.use('/img',express.static(__dirname + 'public/img'));
app.use('/js',express.static(__dirname + 'public/js'));
app.use('/css',express.static(__dirname + 'public/css'));
app.set('views', __dirname + '/public/views');
app.engine('html', ejs);
app.set('view engine', 'html');
app.use(bodyParser.json())

// Home Page
app.get('/', (req, res) => {
    res.send('<h3>FEN to HTML Chess Board Microservice</h3><a href="/api/fen/r1bqkbnr/pppp1ppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R">Example route</a><br><br>GET: /api/fen/*FEN String*<br><br>POST: /api/fen/ - Accepts JSON formatted as so: {\"fen\":\"*FEN String*\"}')
})

// HTML chess board GET route
// Takes FEN string as params
app.get('/api/fen/:fen(*)', (req, res) => {
    chessboard(req.params.fen, res)
})

// HTML chess board POST route
// Accepts {"fen":"fen string"}
app.post('/api/fen/', (req, res) => {
    json = req.body
    chessboard(json.fen, res)
})

// Chessboard
const chessboard = (fen, res) => {
    res.render('chessboard.html', {fen: fen})
}

module.exports = app