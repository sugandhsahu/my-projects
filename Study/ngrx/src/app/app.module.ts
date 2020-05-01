import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { TodoReducer, TodoReducer1 } from './reducers/todo.reducer';
import { TodoComponent } from './components/todo/todo.component';
import { TodoAddComponent } from './components/todo-add/todo-add.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
export const reducer = {
  todos: TodoReducer,
  todo1: TodoReducer1
};
@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoAddComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducer),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
