## Chessboard Representation API [![Build Status](https://travis-ci.org/healeycodes/chessboard-representation-api.svg?branch=master)](https://travis-ci.org/healeycodes/chessboard-representation-api)

An old project I brought back to life!

It was an experiment to create a general-use chessboard representation API. I kept the useful parts.

![alt text](https://github.com/healeycodes/show-chessboard-with-express/blob/master/public/img/example-board.png "Chessboard")


It's an example of a Node.js/Express/EJS wrapper around chessboard.js.

There are two routes, both of which accept a FEN string and return a page containing a chessboard.js representation of the FEN string in HTML/CSS/JavaScript. GET uses params, POST uses JSON.

&nbsp;

Example FEN string: `r1bqkbnr/pppp1ppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R`

&nbsp;

### Routes

GET: /api/fen/`<FEN String>`

POST: /api/fen/`{"fen":"<FEN String>"}`

&nbsp;

### Tech Stack
Node.js/Express with EJS templates, chessboard.js.

Tested with Jest and SuperTest. Added Travis CI (06/19).

&nbsp;

### Install

```npm install```

### Run

```node .\server.js```

### Test

```npm test```
