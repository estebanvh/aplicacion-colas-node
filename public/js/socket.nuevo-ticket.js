//Comando para establecer la comunicación

var socket = io();

var labelTicket = $('#lblNuevoTicket');

socket.on('connect', function() {

    console.log("Se ha conectado al servidor");

});

socket.on('disconnect', function() {

    console.log("Se ha perdido la conexión con el servidor");

});

socket.on('estadoActual', function(resp) {
    labelTicket.text(resp.actual);
})


$('button').on('click', function() {

    socket.emit('siguienteTicket', function(resp) {
        labelTicket.text(resp);
    });

})