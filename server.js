const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const io = require('socket.io')(server, {
    cors: {
        origin: '*',
    }
});
const PORT = 3000;

io.on('connection', (socket) => {
    socket.on('getHouses', () => {
        var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
 
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "http://bidgames.maximebaudoin.fr/api/object.php?object_id=1&user_id=1");

        xhr.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                socket.emit('getHouses', JSON.parse(this.responseText));
            }
        };

        xhr.send();
    });
});

server.listen(PORT, () => {
    console.log('CONNECTION OKAY : '+PORT);
});