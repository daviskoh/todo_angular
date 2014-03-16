angular.module('todos', [])
  .controller('TodoController', function() {
    this.totalTodos = 4;

    this.todos = [
      {text:'do stuff', done:false},
      {text:'do more stuff', done:false}
    ];

    this.addTodo = function() {
      this.todos.push({text:this.formTodoText, done:false});
      this.formTodoText = '';
    };
  });