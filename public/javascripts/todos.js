// declare var incase there is need for more controllers later
var todoApp = angular.module('todos', []);

todoApp.controller('TodoController', function() {
  this.todos = [
    {text:'task 1', done:false},
    {text:'task 2', done:false}
  ];

  this.getTotalTodos = function() {
    return this.totalTodos = this.todos.length;
  };

  this.todoExist = function(todoText) {
    return this.todos.some(function(todo) {
      return todo.text === todoText;
    });
  };

  this.addTodo = function() {
    if (!this.todoExist(this.formTodoText)) {
      console.log('adding: %s', this.formTodoText);
      this.todos.push({text:this.formTodoText, done:false});
    };
    
    this.formTodoText = '';
  };

  this.clearCompleted = function() {
    console.log('clearing Completed');

    this.todos = this.todos.filter(function(todo) {
      return !todo.done;
    });
  };
});