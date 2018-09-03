
const io = require('socket.io-client');
const socket = io('http://localhost:4440');

socket.on('connect', () => {
	console.log('Client connected to server\n');
});

socket.on('auditEvent', message => {
	console.log('New audit event received:');
	console.log(`${JSON.stringify(message, null, 3)}\n');
});
