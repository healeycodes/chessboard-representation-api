This is an ongoing experiment to create a general-use chess board representation API.

Currently it's an example of a Node.js/Express/EJS wrapper around chessboard.js.

There are two routes, both of which accept a FEN string and return a page containing a chessboard.js representation of the FEN string in HTML/CSS/JavaScript. GET uses params, POST uses JSON.

#### GET /api/fen/ `<FEN String>`

#### POST /api/fen/ `{"fen":"<FEN String>"}`

&nbsp;

### Tech Stack
Node.js/Express with EJS templates, chessboard.js.

Tested with Jest.

&nbsp;

Install ```npm install```

Run ```node .\server.js```

Test ```npm test```
