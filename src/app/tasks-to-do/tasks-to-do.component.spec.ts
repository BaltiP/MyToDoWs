import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { TasksToDoComponent } from './tasks-to-do.component';

describe('TasksToDoComponent', () => {
  let component: TasksToDoComponent;
  let fixture: ComponentFixture<TasksToDoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TasksToDoComponent],
      imports: [FormsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksToDoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
