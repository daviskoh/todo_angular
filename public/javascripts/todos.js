// assign to var incase more controllers necessary later
var todoApp = angular.module('todos', []);

todoApp.controller('TodoController', function() {
  this.todos = [
    {text:'do stuff', done:false},
    {text:'do more stuff', done:false}
  ];

  this.getTotalTodos = function() {
    return this.totalTodos = this.todos.length;
  };

  this.addTodo = function() {
    this.todos.push({text:this.formTodoText, done:false});
    this.formTodoText = '';
  };

  this.clearCompleted = function() {
    this.todos = this.todos.filter(function(todo) {
      return !todo.done;
    });
  };
});