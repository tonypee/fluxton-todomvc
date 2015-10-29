import fluxton from '../fluxton';
import Immutable from 'immutable';
import EventEmitter from 'events';

class Todos extends EventEmitter {

  constructor() {
    super();
    this.store = fluxton.create('todos', Immutable.Map({}));
    this.store.on('change', value => this.emit('change', value));
  }

  getAll() {
    return this.store.getValue();
  }

  addItem(text) {
    this.store.change(todos => {
      var id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
      todos = todos.set(id, Immutable.Map({
        id: id,
        complete: false,
        text: text
      }));
      return todos;
    });
  }

  destroy(id) {
    this.store.change(todos => {
      return todos.delete(id);
    })
  }

  destroyCompleted() {
    this.store.change(todos => {
      return todos.filter(todo => {
        return !todo.get('complete');
      });
    });
  }

  toggleComplete(id) {
    this.store.change(todos => {
      return todos.updateIn([id, 'complete'], val => !val);
    });
  }

  toggleAllCompleted() {
    this.store.change(todos => {
      var allComplete = this.areAllComplete();
      todos.forEach((todo, id) => {
        todos = todos.setIn([id, 'complete'], !allComplete);
      });
      return todos;
    });
  }

  updateText(id, text) {
    this.store.change(todos => {
      return todos.setIn([id, 'text'], text);
    });
  }

  areAllComplete() {
    return this.store.getValue().size == this.numCompleted();
  }

  numCompleted() {
    var todos = this.store.getValue();
    return todos.filter(todo => {
      return todo.get('complete')
    }).size;
  }
}

export default new Todos();
