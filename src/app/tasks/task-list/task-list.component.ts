import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {

  tasks: any[] = [];

  constructor(
    private router: Router,
    public taskService: TaskService
  ){

  }

  ngOnInit(){
    this.getTaskList();
  }

  addNewTask(){
    this.router.navigate(['/new-tasks/']);
  }

  getTaskList(){
    this.tasks = this.taskService.getTasks();
    console.log(this.tasks);
  }

  deleteTask(task: any){
    this.taskService.removeTask(task);
    this.getTaskList();
  }

  editTask(id: any){
    this.router.navigate(['/tasks/',id]);
  }

  taskDetails(id: any){
    this.router.navigate(['/tasks-details/',id]);
  }

  editStatus(item: any){
    let task = {
      id: item.id,
      task: item.task,
      description: item.description,
      dueDate: item.dueDate,
      status: item.status
    }
    this.taskService.editTasks(task);
  }
}
