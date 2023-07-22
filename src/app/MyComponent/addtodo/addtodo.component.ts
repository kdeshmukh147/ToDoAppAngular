import { Component,Output,EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { clTodo } from 'src/Model/clTodo';

@Component({
  selector: 'app-addtodo',
  templateUrl: './addtodo.component.html',
  styleUrls: ['./addtodo.component.css']
})
export class AddtodoComponent {

  objTodo!:clTodo
  @Output() outAddTodo:EventEmitter<clTodo>=new EventEmitter()

  onSubmit(f:NgForm)
  {

    if(f.valid)
    {
      this.objTodo=f.value
      this.outAddTodo.emit(this.objTodo)
    }

  }

}
