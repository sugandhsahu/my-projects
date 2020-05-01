import { TodoActionTypes } from '../shared/enums/todo-action-types.enum';
import { ActionParent } from '../actions/todo.action';
import { Todo } from '../models/Todo';
import { List } from 'immutable';

export const x = List<Todo>();

export function TodoReducer(state = x , action: ActionParent) {
    switch (action.type) {
      case TodoActionTypes.Add:
        console.log('sdhbc' ,  state.push(action.payload));
        return state.push(action.payload);
      case TodoActionTypes.Remove:
        const k = JSON.parse(JSON.stringify(state));
        k.splice(action.payload, 1);
        return [...k];
      default: return state;
    }
}

export function TodoReducer1(state = x , action: ActionParent) {
  switch (action.type) {
    case TodoActionTypes.Add:
      return [...state, action.payload];
    case TodoActionTypes.Remove:
      const k = JSON.parse(JSON.stringify(state));
      k.splice(action.payload, 1);
      return [...k];
    default: return state;
  }
}

