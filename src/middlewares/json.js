import { Buffer } from 'node:buffer'

export function json(request, response) {
  const buffers = [];

  for (const chunk of request) {
    buffers.push(chunk);
  }

  try {
    request.body = JSON.parse(Buffer.concat(buffers).toString())
  } catch (error) {
    request.body = null;
  }

  response.setHeader('Content-type', 'application/json')
}