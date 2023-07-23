import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodocomComponent } from './MyComponent/todocom/todocom.component';
import { AboutComponent } from './MyComponent/about/about.component';
import { TodoroutComponent } from './MyComponent/todorout/todorout.component';

const routes: Routes = [
  { path: '', 
  redirectTo: '/home?type=all',
        pathMatch: 'full'},
  { path: '', component: TodocomComponent
  , children:[{ path: 'home', component: TodoroutComponent } ]},
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
