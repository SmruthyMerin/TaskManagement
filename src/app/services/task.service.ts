import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  private storageKey = 'tasks';

  getTasks() {
    const storedTasks = localStorage.getItem(this.storageKey);
    return storedTasks ? JSON.parse(storedTasks) : [];
  }

  addTask(task: any) {
    const tasks = this.getTasks();
    tasks.push(task);
    localStorage.setItem(this.storageKey, JSON.stringify(tasks));
  }

  removeTask(task: any) {
    let tasks = this.getTasks();
    tasks = tasks.filter((x: any) => { return x.id!= task });
    localStorage.setItem(this.storageKey, JSON.stringify(tasks));
  }

  taskDetails(id: any){
    let tasks = this.getTasks();
    let result = tasks.filter((x: any) => { return x.id == id });
    return result;
  }

  editTasks(task: any){
    const tasks = this.getTasks();
    let result = tasks.filter((x: any) => { return x.id == task.id });
    result[0].task = task.task;
    result[0].description = task.description;
    result[0].dueDate = task.dueDate;
    result[0].status = task.status;
    localStorage.setItem(this.storageKey, JSON.stringify(tasks));
  }

  clearTasks() {
    localStorage.removeItem(this.storageKey);
  }

}
