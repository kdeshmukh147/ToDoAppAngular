import { Component,Input,Output,EventEmitter } from '@angular/core';
import { clTodo } from 'src/Model/clTodo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
@Input() inputTodo!:clTodo;
@Output() outputTodo : EventEmitter<clTodo>=new EventEmitter();
@Output() outputCheckbox : EventEmitter<clTodo>=new EventEmitter();

btnOnclick(todo:clTodo){
this.outputTodo.emit(todo);
}


onCheckboxClick(todo:clTodo){
  console.log(todo)
  this.outputCheckbox.emit(todo);
}

}
