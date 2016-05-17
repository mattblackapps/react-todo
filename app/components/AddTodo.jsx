var React = require('react');

var AddTodo = React.createClass({

  onSubmit: function(e) {
    e.preventDefault();
    var text = this.refs.text.value;

    if (text.length > 0) {
      this.refs.text.value = '';
      this.props.onAddTodo(text);
    } else  {
      this.refs.text.focus();
    }
  },

  render: function () {
    return (
      <div>
        <form ref="form" onSubmit={this.onSubmit} className="add-todo-form">
          <input type="text" ref="text" placeholder="What do you want to do?"/>
          <button className="button expanded">Add Todo</button>
        </form>
      </div>
    );
  }
});

module.exports = AddTodo;
