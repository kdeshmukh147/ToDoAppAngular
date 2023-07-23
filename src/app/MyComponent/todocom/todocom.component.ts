import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { clTodo } from 'src/Model/clTodo';

@Component({
  selector: 'app-todocom',
  templateUrl: './todocom.component.html',
  styleUrls: ['./todocom.component.css']
})
export class TodocomComponent {

  todoArr!:clTodo[];
  localItem:string|null;

  constructor(private router: Router) {

    this.localItem=localStorage.getItem("todoData");

    if(this.localItem == null)
    this.todoArr=[]
    else
    this.todoArr=JSON.parse(this.localItem);
    

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
   
localStorage.setItem("todoData",JSON.stringify(this.todoArr));
this.router.navigate(['/home']);

  }



  /**
   *
   */
 

}
