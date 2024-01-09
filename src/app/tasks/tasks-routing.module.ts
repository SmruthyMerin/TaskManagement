import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { TaskDetailsComponent } from './task-details/task-details.component';

const routes: Routes = [
  {
    path: '', component: TaskListComponent,
  },
  {
    path: 'new-tasks', component: AddTaskComponent,
  },
  {
    path: 'tasks/:id', component: EditTaskComponent,
  },
  {
    path: 'tasks-details/:id', component: TaskDetailsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class TasksRoutingModule { }
