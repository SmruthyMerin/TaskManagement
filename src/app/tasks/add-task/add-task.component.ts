import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import { TaskService } from '../../services/task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {

  taskForm: FormGroup;
  newTask: any;
  totalTask: number = 0;
  tasks: any;

  constructor(
    public fb: FormBuilder,
    public taskService: TaskService,
    private router: Router,
  ){
    this.taskForm = this.fb.group({
      task: ['', Validators.required],
      description: ['', Validators.required],
      dueDate: ['', Validators.required],
      status: [''],
    });
    
  }

  ngOnInit() {
    this.getTaskList();
  }

  addtask(){
    if (this.taskForm.invalid) {
      return;
    }
    this.newTask = {
      id: this.totalTask+1,
      task: this.taskForm.controls['task'].value,
      description: this.taskForm.controls['description'].value,
      dueDate: this.taskForm.controls['dueDate'].value,
      status: 0 // status 0 denotes not completed and 1 denotes completed
    }
    this.taskService.addTask(this.newTask);
    this.router.navigate(['']);

  }

  getTaskList(){
    this.tasks = this.taskService.getTasks();
    this.totalTask = this.tasks.length;
  }

  back(){
    this.router.navigate(['']);
  }

  
}
