angular.module('todos', [])
  .controller('TodoController', function() {
    this.totalTodos = 4;

    this.todos = [
      {text:'do stuff', done:false},
      {text:'do more stuff', done:false}
    ];
  });