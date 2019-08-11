const express = require('express');
const app = new express();
const port = process.env.PORT || 3000;
const server = require('http').createServer(app);
const io = require('socket.io')(server)
const dir = __dirname;
const fs = require('fs');
const accountSid = 'AC07351b889a5291d408221983ae1ca892';
const authToken = 'b04b813f8b3ab9fbd01e38a54d1f0132';
const client = require('twilio')(accountSid, authToken);


// global.phone = "";

app.get('/', (req, res) => {
    client.messages
        .create({
            from: 'whatsapp:+972722577577',
            body: 'זו הודעה מיוחדת שנשלחת מWhatsApp API. \n מדובר בשירות מיוחד שמשאפשר לשלוח הודעות  WhatsApp ללקוחות בצורה סופר נוחה ושימושית.',
            to: 'whatsapp:+972544506779'
        })
        .then(message => console.log(message.sid));
});
// app.get('/', (req, res) => {
//     client.messages
//         .create({
//             from: 'whatsapp:+972722577577',
//             body: 'בדיקת שימוש בAPI של Whatsapp. הבעיה היחידה פה היא שהמשתמש חייב ליצור קשר בהודעה ראשונה אל הלקוח.',
//             to: 'whatsapp:+972544506779'
//         })
//         .then(message => console.log(message.sid));
// });
// app.use(express.static('public'));

// app.get('/:phone', (req, res) => {
//     phone = req.params.phone;
//     console.log(phone);

//     res.sendFile(dir + '/index.html')
// });

// io.on('connection', function (socket) {
//     console.log('a user connected');
//     socket.emit('phoneNum', phone);

//     socket.on('disconnect', function () {
//         console.log('user disconnected');
//     });

//     socket.on('test', function (data) {
//         console.log(data);
//     })
// });


server.listen(port, () => {
    console.log("listening on port 3000");

});