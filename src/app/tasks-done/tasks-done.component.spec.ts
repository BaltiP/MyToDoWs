import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksDoneComponent } from './tasks-done.component';

describe('TasksDoneComponent', () => {
  let component: TasksDoneComponent;
  let fixture: ComponentFixture<TasksDoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TasksDoneComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksDoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add item and increment running id', () => {
    component.addToDoItem('todoitem');
    expect(component.itemsDone.size).toBe(1);
    expect(component.runningID).toBe(1);
  });

  it('should clear items and set runningid to 0', () => {
    component.addToDoItem('todoitem');
    component.clear();
    expect(component.itemsDone.size).toBe(0);
    expect(component.runningID).toBe(0);
  });
});
