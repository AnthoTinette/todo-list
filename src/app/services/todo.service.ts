import { Injectable } from '@angular/core';
import { Observable, of, interval, empty } from 'rxjs';
import { throttleTime } from 'rxjs/operators';
import { StorageService } from './storage.service';
import { LOCAL_STORAGE_TODOS } from 'src/constants/data';

// A remplacer par ta TODO
export interface Todo {
  name: string;
  description: string;
  updated: string;
  id: number;
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  // The local Todo List
  private _todos: Todo[] = [];
  get todos(): Todo[] {
    return this.storageService.parse(LOCAL_STORAGE_TODOS) || this._todos;
  }
  set todos(todos: Todo[]) {
    this._todos = [...todos];
    this.storageService.save(LOCAL_STORAGE_TODOS, this._todos);
  }

  constructor(private storageService: StorageService) { }

  list(): Observable<Todo[]> {
    return of(this.todos).pipe(throttleTime(200)); // Simulate a 200ms request
  }

  create(todo: Todo): Observable<Todo> {
    this.todos = [...this.todos, todo];
    return of(todo);
  }

  update(todoToUpdate: Todo, index: number): Observable<Todo[]> {
    this.todos = this.todos.map((todo, i) => {
      const isTodoToUpdate = index === i;
      return isTodoToUpdate ? todoToUpdate : todo;
    });
    return of(this.todos);
  }

  remove(index: number): void {
    const todoRemoved: Todo = this.todos.splice(index, 1)[0];
    this.todos = this.todos.filter(todo => todoRemoved.id !== todo.id);
  }
}
