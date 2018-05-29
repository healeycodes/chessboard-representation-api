const express = require('express')
    ,   bodyParser = require('body-parser')
    ,   webshot = require('webshot')
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
    res.send('Hello World!')
})

// HTML chess board GET route
app.get('/api/fen/png/:fen(*)', (req, res) => {
    chessboard(req.params.fen, res)
})

// HTML chess board POST route
// {"fen":"fen string"}
app.post('/api/fen/chessboard', (req, res) => {
    json = req.body
    chessboard(json.fen, res)
})

// Chessboard
const chessboard = (fen, res) => {
    res.render('chessboard.html', {fen: fen})
}

/*
    ejs(__dirname + '/public/views/chessboard.html', {fen:'r1bqkbnr/pppp1ppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R'}, function(err, str) {
        // str => Rendered HTML string
        console.log(str)
    })
*/

module.exports = app