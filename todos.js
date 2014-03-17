// declare var incase there is need for more controllers later
var todoApp = angular.module('todos', []);

todoApp.controller('TodoController', function() {
  var self = this;

  this.todos = [
    {text:'do stuff', done:false},
    {text:'do more stuff', done:false},
    {text:'test', done:false}
  ];

  this.getTotalTodos = function() {
    return this.totalTodos = this.todos.length;
  };

  this.todoExist = function(todoText) {
    return self.todos.some(function(todo) {
      return todo.text === todoText;
    });
  };

  this.addTodo = function() {
    if (!this.todoExist(this.formTodoText)) {
      console.log('adding Todo');
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