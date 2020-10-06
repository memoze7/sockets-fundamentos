const {
    io
} = require("../server");


io.on('connection', (client) => {
    console.log('Usuario conectado');

    client.emit('sendData', {
        usuario: 'Administrador',
        message: 'Bienvenido a esta aplicación',
    })

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    // escuchar el cliente
    client.on('sendData', (data, callback) => {

        // console.log(data);

        client.broadcast.emit('sendData', data);
        // if (message.usuario) {
        //     callback({
        //         resp: 'Todo salio bien'
        //     });

        // } else {
        //     callback({
        //         resp: 'Todo salio mal'
        //     });

        // }

    });



})