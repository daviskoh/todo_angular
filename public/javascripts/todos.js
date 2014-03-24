// declare var incase there is need for more controllers later
angular.module('todos', []);

angular.module('todos').controller('TodoController', function() {
  this.todos = [
    {text:'task 1', done:false, priority: 'low'},
    {text:'task 2', done:false, priority: 'low'}
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
      this.todos.push({text:this.formTodoText, done:false, priority: this.priority});
    };
    
    this.formTodoText = '';
    this.priority = '';
  };

  this.clearCompleted = function() {
    console.log('clearing Completed');

    this.todos = this.todos.filter(function(todo) {
      return !todo.done;
    });
  };
});

