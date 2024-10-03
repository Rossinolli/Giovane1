const http = require('http');

const requestListener = (req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('hello');
       } else if (req.url === '/sobre') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Sou um dev preguiçoso');
        } else if (req.url === '/contato') {
         res.writeHead(200, { 'Content-Type': 'text/plain' });
         res.end('Contato: Email - Engs-hivanrossinolli@camporeal.edu.br');
        } else {    
        res.wrideHead(404, { 'Content-Type': 'text/plain' });
        res.end('nada aqui'); 
    }

};

const server = http.createServer(requestListener);

server.listen(3000, ()  => {
    console.log('Servidor esta rodando na porta 3000')

});