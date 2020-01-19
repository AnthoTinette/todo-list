import * as moment from 'moment';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { LOCAL_STORAGE_TODOS } from '../../../constants/data';
import { CORRECT_FORM_VALIDATION } from '../../../constants/form';
import { TodoComponent } from 'src/app/components/todo/todo.component';
import { TodoService, Todo } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})

export class TodoListComponent implements OnInit {
  todoFormControl = new FormControl('', [
    Validators.required,
  ]);
  todoEditControl = new FormControl('', [
    Validators.required,
  ]);
  todos: Todo[] = [];
  todoName: string;
  todoEdit: string;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.getTodos();
  }

  saveTodo() {
    if (this.todoFormControl.status === CORRECT_FORM_VALIDATION) {
      // Todo Creation
      this.todoService.create({
        name: this.todoName.indexOf('--') > -1 ? this.todoName.substr(0, this.todoName.indexOf('--')) : this.todoName,
        description: this.todoName.indexOf('--') > -1 ? this.todoName.substr(this.todoName.indexOf('--') + 2, this.todoName.length) : '',
        updated: moment().locale('fr').format('ddd DD/MM/YYYY HH:mm.ss'),
        id: Math.random(),
      })
        .subscribe(() => {
          // List refresh
          this.getTodos();
        });

      // Form reset
      this.todoName = null;
      this.todoFormControl.reset();
    }
  }

  deleteTodo(index: number) {
    this.todoService.remove(index);
    this.getTodos();
  }

  editTodo(todo: TodoComponent) {
    const { index, name, todoEdit, editMode } = todo;
    this.todoEdit = todoEdit || name;

    if (this.todoEditControl.status === CORRECT_FORM_VALIDATION) {
      this.todoService.update({
        ...todo,
        name: this.todoEdit.indexOf('--') > -1 ? this.todoEdit.substr(0, this.todoEdit.indexOf('--')) : this.todoEdit,
        description: this.todoEdit.indexOf('--') > -1 ? this.todoEdit.substr(this.todoEdit.indexOf('--') + 2, this.todoEdit.length) : '',
        id: Math.random(),
      }, index);
      this.getTodos();
    }
  }

  getTodos() {
    this.todoService.list().subscribe(todos => {
      this.todos = todos;
    });
  }
}
