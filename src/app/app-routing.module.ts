import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodocomComponent } from './MyComponent/todocom/todocom.component';
import { AboutComponent } from './MyComponent/about/about.component';

const routes: Routes = [
  { path: '', component: TodocomComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
