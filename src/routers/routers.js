import { buildRoutePath } from "../utils/build-route-path.js";
import { tasksDelete, tasksGET, tasksPOST, tasksPUT } from "./routers-handles.js";

export const routers = [
  {
    method: 'GET', 
    path: buildRoutePath('/tasks'),
    handler: tasksGET, 
  },
  {
    method: 'POST', 
    path: buildRoutePath('/tasks'),
    handler: tasksPOST, 
  }, 
  {
    method: 'PUT',
    path: buildRoutePath('/tasks/:id'),
    handler: tasksPUT,
  },
  {
    method: 'DELETE',
    path: buildRoutePath('/tasks/:id'),
    handler: tasksDelete,
  }
]; 