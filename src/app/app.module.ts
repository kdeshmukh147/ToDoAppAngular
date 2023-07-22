import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodocomComponent } from './MyComponent/todocom/todocom.component';
import { TodoItemComponent } from './MyComponent/todo-item/todo-item.component';
import { AddtodoComponent } from './MyComponent/addtodo/addtodo.component';
import { FormsModule }   from '@angular/forms';
import { AboutComponent } from './MyComponent/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    TodocomComponent,
    TodoItemComponent,
    AddtodoComponent,
    AboutComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
