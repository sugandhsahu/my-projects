import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';
import { Store } from '@ngrx/store';
import { TodoAdd } from '../../actions/todo.action';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {

  constructor(private store: Store<{todos: Todo[]}>) { }

  ngOnInit() {
  }

  Addtodo(todo: string) {
    const newtodo = new Todo();
    newtodo.title = todo;
    this.store.dispatch(new TodoAdd(newtodo));
  }

}
