var socket = io();

socket.on('connect', function () {
    console.log('Conectado al servidor');
});
// escuchar informacion
socket.on('disconnect', function () {
    console.log('Perdimos conexión con servidor');
});

// Enviar información al servidors
socket.emit('sendData', {
    usuario: 'Guillermo',
    message: 'Hola mundo',
}, function (resp) {
    console.log('resp :>> ', resp);
})

// Escuchar información
socket.on('sendData', function (message) {
    console.log('message :>> ', message);
})