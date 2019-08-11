const express = require('express');
const app = new express();
const port = process.env.PORT || 3000;
const server = require('http').createServer(app);
const io = require('socket.io')(server)
const dir = __dirname;
const fs = require('fs');

global.phone = "";


app.use(express.static('public'));

app.get('/:phone', (req, res) => {
    phone = req.params.phone;
    console.log(phone);

    res.sendFile(dir + '/index.html')
});

io.on('connection', function (socket) {
    console.log('a user connected');
    socket.emit('phoneNum', phone);

    socket.on('disconnect', function () {
        console.log('user disconnected');
    });

    socket.on('test', function (data) {
        console.log(data);
    })

    socket.on('text', function (data) {
        console.log("Text Recieved");
        console.log(data);
    })
});


server.listen(port, () => {
    console.log("listening on port 3000");
});