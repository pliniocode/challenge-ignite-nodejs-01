import { tasksGET } from "./routers-handles.js";

export const routers = [
  {
    method: 'GET', 
    path: '/tasks',
    handler: tasksGET, 
  }
]; 