import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';
import { select, Store } from '@ngrx/store';
import { TodoRemove } from '../../actions/todo.action';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos: Todo[];

  constructor(private store: Store<{todos: Todo[]}>) {
    // todos(variable) same as in appmodule.ts reducer in storeModule
    store.pipe(select('todos')).subscribe(values => {
      console.log(values);
      this.todos = values;
    });
  }

  ngOnInit() {
  }

  removeTodo(index) {
    this.store.dispatch(new TodoRemove(index));
  }

}
