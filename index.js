const http2 = require('http2');
const fs = require('fs');
const port = process.env.SIMPLE_HTTP2_SERVER_PORT || 3030
const appName = 'Simple HTTP/2 Server';

// const pubKey = fs.readFileSync('localhost-cert.pem');
// const privateKey = fs.readFileSync('localhost-privkey.pem')

function onRequest (req, resp) {
    console.log(req.headers);
}




const server = http2.createSecureServer({
    key: fs.readFileSync(__dirname + '/certs/localhost-privkey.pem'),
    cert: fs.readFileSync(__dirname + '/certs/localhost-cert.pem')
}, onRequest);



server.on('stream', async (stream, headers) => {

    if (headers[':path'] === '/stream') {
        stream.respond({
            ':status': 200,
            'content-type': 'text/event-stream'
        });
        setInterval(() => stream.write(`data: ${Math.random()} at: ${new Date()}\n`), 200);
    }
});

server.listen(port, () => console.log(`${appName} started at ${new Date()} and listening on port ${port}`));
