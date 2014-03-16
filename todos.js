angular.module('todos', [])
  .controller('TodoController', function() {
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
  });