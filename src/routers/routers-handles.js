import { randomUUID } from 'node:crypto';

import { Database } from "../data/database.js";

const database = new Database();

export function tasksGET(request, response) {
  // const 

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
    created_at: new Date().toLocaleDateString(),
    updated_at: null, 
  }

  database.insert(tasks);
  response.writeHead(201);
  response.end('Task created successfully ');
}
