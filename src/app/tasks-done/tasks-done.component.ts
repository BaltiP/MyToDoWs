import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tasks-done',
  templateUrl: './tasks-done.component.html',
  styleUrls: ['./tasks-done.component.css']
})
export class TasksDoneComponent {
  itemsDone = new Map<number, string>();
  runningID = 0;

  addToDoItem(event) {
    // console.log('addToDoItem');
    this.runningID++;
    this.itemsDone.set(this.runningID, event);
  }

  clear() {
    this.runningID = 0;
    this.itemsDone.clear();
  }
}
