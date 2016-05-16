var React = require('react');

var TodoList = require('TodoList');

var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      todos: [
        {
          id: 1,
          text: 'Walk the dog'
        }, {
          id: 2,
          text: 'Mow the yard'
        }, {
          id: 3,
          text: 'Get mail'
        }, {
          id: 4,
          text: 'Love wife'
        }
      ]
    };
  },
  render: function () {
    var {todos} = this.state;



    return (
      <div>
        <TodoList todos={todos}/>
      </div>
    )
  }
});

module.exports = TodoApp;
