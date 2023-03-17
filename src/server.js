import http from 'node:http';
import { routers } from './routers/routers.js';

function serverHandler(request, response) {
  const {method, url} = request;

  const route = routers.find((route) => {
    return route.method === method && route.path === url;
  });

  if (route) {
    return route.handler(request, response);
  }

  return response.writeHead(404).end('Not found (: ');
}


const PORT = 3000;

const server = http.createServer(serverHandler);

server.listen(PORT, () => {{
  console.log('Server is running at port: ', PORT);
}});