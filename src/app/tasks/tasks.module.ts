import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksRoutingModule } from './tasks-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddTaskComponent } from './add-task/add-task.component';
import { TaskListComponent } from './task-list/task-list.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { TaskDetailsComponent } from './task-details/task-details.component';


@NgModule({
  declarations: [
    AddTaskComponent,
    TaskListComponent,
    EditTaskComponent,
    TaskDetailsComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    TasksRoutingModule,
    CommonModule
  ]
})
export class TasksModule { }
