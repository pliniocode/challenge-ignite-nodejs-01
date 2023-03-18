import { randomUUID } from 'node:crypto';

import { Database } from "../data/database.js";

const database = new Database();

export function tasksGET(request, response) {

  const tasks = database.select();
  const tasksInJson = JSON.stringify(tasks);
  response.end(tasksInJson);
}

export function tasksPOST(request, response) {
  const { title, description } = request.body;

  const tasks = {
    id: randomUUID(),
    title: title,
    description: description,
    completed_at : null,
    created_at: `${new Date().toLocaleDateString()}: ${new Date().toLocaleTimeString()}`,
    updated_at: null, 
  }

  database.insert(tasks);
  response.writeHead(201);
  response.end(JSON.stringify('Task created successfully'));
}

export function tasksPUT(request, response) {
  const { id } = request.params;
  const { title, description } = request.body;

  database.update(id, { 
    title, 
    description, 
    updated_at: `${new Date().toLocaleDateString()}: ${new Date().toLocaleTimeString()}`
  });

  return response.writeHead(204).end();
}

export function tasksDelete(request, response) {
  const { id } = request.params;

  database.delete(id);
  return response.writeHead(204).end();
}

export function tasksPatch(request, response) {
  const { id } = request.params;

  const dateTimeNow = `${new Date().toLocaleDateString()}: ${new Date().toLocaleTimeString()}`;
  database.update(id, {
    completed_at: dateTimeNow,
    updated_at: dateTimeNow
  });

  return response.writeHead(204).end();
}




/**
 * Seria interessante implementar tratamento de erros para cada chamada do database.
 * Outra, é deixar cada função dentro de um arquivo especifico, dento de um diretório
 * Ex: ./routers-handlers/*.js
 * 
 */