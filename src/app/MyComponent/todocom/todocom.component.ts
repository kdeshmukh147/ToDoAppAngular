import { Component } from '@angular/core';
import { clTodo } from 'src/Model/clTodo';

@Component({
  selector: 'app-todocom',
  templateUrl: './todocom.component.html',
  styleUrls: ['./todocom.component.css']
})
export class TodocomComponent {

  todoArr!:clTodo[];
  localItem:string|null;


  deleteTodo(todo:clTodo)
  {
    const index = this.todoArr.indexOf(todo);
    this.todoArr.splice(index,1);
    localStorage.setItem("todoData",JSON.stringify(this.todoArr))

  }

  addTodo(todo:clTodo){
    console.log("todo added")
    let maxValue = Number.MIN_VALUE;
    for (let i = 0; i < this.todoArr.length; i++) {
        if (this.todoArr[i].sno > maxValue) {
            maxValue = this.todoArr[i].sno;
        }
    }

    todo.sno=maxValue+1

    this.todoArr.push(todo)
   
localStorage.setItem("todoData",JSON.stringify(this.todoArr))
  }

  checkboxClick(todo:clTodo){
    const index = this.todoArr.indexOf(todo);
    this.todoArr[index].active= !this.todoArr[index].active
    localStorage.setItem("todoData",JSON.stringify(this.todoArr))

  }

  /**
   *
   */
  constructor() {

    this.localItem=localStorage.getItem("todoData");

    if(this.localItem == null)
    this.todoArr=[]
    else
    this.todoArr=JSON.parse(this.localItem);
    

  }

}
