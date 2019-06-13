const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs').renderFile;

// App to be exported
const app = express();

// Configuration
app.use(express.static(__dirname + '/public/'));
app.set('views', __dirname + '/public/views');
app.engine('html', ejs);
app.set('view engine', 'html');
app.use(bodyParser.json());

// Home Page
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// HTML chess board GET route
// Takes FEN string as params
app.get('/api/fen/:fen(*)', (req, res) => {
    chessboard(req.params.fen, res);
});

// HTML chess board POST route
// Accepts {"fen":"fen string"}
app.post('/api/fen/', (req, res) => {
    const json = req.body;
    chessboard(json.fen, res);
});

// Chessboard
const chessboard = (fen, res) => {
    res.render('chessboard.html', {fen: fen});
};

module.exports = app;