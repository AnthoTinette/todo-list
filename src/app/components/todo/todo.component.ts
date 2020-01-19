import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TodoComponent implements OnInit {
  editMode = false;

  @Input() name: string;
  @Input() description: string;
  @Input() updated: string;
  @Input() index: number;
  @Input() todoEditControl: FormControl;
  @Input() todoEdit;

  @Output() edit = new EventEmitter<TodoComponent>();
  @Output() delete = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  toggleEdit() {
    this.editMode = !this.editMode;
  }

  editTodo() {
    this.toggleEdit();
    this.edit.emit(this);
  }

}
