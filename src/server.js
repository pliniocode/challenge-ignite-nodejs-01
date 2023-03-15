import http from 'node:http';

const PORT = 3000;

const server = http.createServer(handler);

function handler(request, response) {

    response.writeHead(200);
    response.write('Server is up');
    return response.end();
}

server.listen(PORT, () => {{
  console.log('Server is running at port: ', PORT);
}});