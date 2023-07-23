import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoroutComponent } from './todorout.component';

describe('TodoroutComponent', () => {
  let component: TodoroutComponent;
  let fixture: ComponentFixture<TodoroutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoroutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoroutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
