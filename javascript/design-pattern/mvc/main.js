import TodoController from './Todo/TodoController.js';
import TodoModel from './Todo/TodoModel.js';
import TodoView from './Todo/TodoView.js';

new TodoController(new TodoView(), new TodoModel());
