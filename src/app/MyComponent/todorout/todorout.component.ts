import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { clTodo } from 'src/Model/clTodo';

@Component({
  selector: 'app-todorout',
  templateUrl: './todorout.component.html',
  styleUrls: ['./todorout.component.css']
})
export class TodoroutComponent {
  @Input() inputTodoArray!: clTodo[];

  todoArr!: clTodo[];
  localItem!: string | null;
  type!: string;




  constructor(private route: ActivatedRoute) {
    debugger;
    this.route.queryParams.subscribe(
      params => {
        this.type = params['type'];

        this.localItem = localStorage.getItem("todoData");

        if (this.localItem == null)
          this.todoArr = []
        else {
          this.todoArr = JSON.parse(this.localItem);
          if (this.type == "pending") {
            this.todoArr = this.todoArr.filter(function (item) {
              return !item.active
            })
          }
          if (this.type == "completed") {
            this.todoArr = this.todoArr.filter(function (item) {
              return item.active
            })
          }
        }

      }
    )

    console.log(this.type);


  }

  deleteTodo(todo: clTodo) {
    const index = this.todoArr.indexOf(todo);
    this.todoArr.splice(index, 1);
    localStorage.setItem("todoData", JSON.stringify(this.todoArr))

  }


  checkboxClick(todo: clTodo) {
    const index = this.todoArr.indexOf(todo);
    this.todoArr[index].active = !this.todoArr[index].active
    localStorage.setItem("todoData", JSON.stringify(this.todoArr))

  }

}
