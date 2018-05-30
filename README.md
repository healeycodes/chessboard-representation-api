## getchessboard

This is an ongoing experiment to create a general-use chess board representation API.

Currently there are two routes, both of which accept a FEN string and return a page containing a chessboard.js representation of the FEN string in HTML/CSS/JavaScript.

### GET /api/fen/ `<FEN String>`

### POST /api/fen/ `{"fen":"<FEN String>"}`

&nbsp;

#### Tech Stack
Node.js/Express with EJS templates.
Tested with Jest.

&nbsp;

Run ```node .\server.js```

Test ```npm test```
