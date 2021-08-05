import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasklistComponent } from '../tasklist/tasklist.component';
import { TaskComponent } from './task.component';

const routes: Routes = [{ path: '', component: TaskComponent },
{path:'tasks',
children:[{path:'tasklists',component:TasklistComponent}]} ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskRoutingModule { }
