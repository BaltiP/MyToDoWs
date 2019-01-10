import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tasks-to-do',
  templateUrl: './tasks-to-do.component.html',
  styleUrls: ['./tasks-to-do.component.css']
})
export class TasksToDoComponent {
  @Output() transferItemToDone: EventEmitter<string>;

  inputValue = '';
  toDoItems = new Map<number, string>();
  runningID = 1;

  constructor() {
    this.transferItemToDone = new EventEmitter();
  }

  getHeaderString(): string {
    return 'ToDo';
  }

  addToDoItem(event, value) {
    // console.log('addToDoItem!');
    if (value !== '') {
      this.toDoItems.set(this.runningID, value);
      this.runningID++;
      this.inputValue = '';
    }
  }

  deleteToDoItem(id: number) {
    // console.log('deleteToDoItem!');
    this.toDoItems.delete(id);
  }

  dblclkToDoItem(id: number) {
    console.log('dblclkToDoItem!');
    this.emitTransferItemToDone(id);
  }

  emitTransferItemToDone(id: number) {
    console.log('emitTransferItemToDone!');
    this.transferItemToDone.emit(this.toDoItems.get(id));
    this.deleteToDoItem(id);
  }
}
