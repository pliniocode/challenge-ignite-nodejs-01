import { tasksGET, tasksPOST } from "./routers-handles.js";

export const routers = [
  {
    method: 'GET', 
    path: '/tasks',
    handler: tasksGET, 
  },
  {
    method: 'POST', 
    path: '/tasks',
    handler: tasksPOST, 
  }

]; 