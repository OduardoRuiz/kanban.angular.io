import { TodoComponent } from './views/todo/todo.component';
import { NewtaskComponent } from './views/newtask/newtask.component';
import { DoneComponent } from './views/done/done.component';
import { AboutComponent } from './views/about/about.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoingComponent } from './views/doing/doing.component';


const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'doing', component: DoingComponent },
  { path: 'done', component: DoneComponent },
  { path: 'newtask', component: NewtaskComponent },
  { path: 'todo', component: TodoComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
