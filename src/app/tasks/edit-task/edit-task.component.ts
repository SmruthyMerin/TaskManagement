import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskService } from '../../services/task.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrl: './edit-task.component.css'
})
export class EditTaskComponent {
  taskForm: FormGroup;
  newTask: any;
  totalTask: number = 0;
  tasks: any;
  id: any;
  
  constructor(
    public fb: FormBuilder,
    public taskService: TaskService,
    private router: Router,
    private route: ActivatedRoute,
  ){
    this.taskForm = this.fb.group({
      task: ['', Validators.required],
      description: ['', Validators.required],
      dueDate: ['', Validators.required],
      status: [''],
    });
    this.id = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.getTaskList();
  }

  edittask(){
    if (this.taskForm.invalid) {
      return;
    }
    this.newTask = {
      id: this.id,
      task: this.taskForm.controls['task'].value,
      description: this.taskForm.controls['description'].value,
      dueDate: this.taskForm.controls['dueDate'].value,
      status: this.taskForm.controls['status'].value
    }
    this.taskService.editTasks(this.newTask);
    this.router.navigate(['']);
    

  }

  getTaskList(){
    this.tasks = this.taskService.taskDetails(this.id);
    console.log(this.tasks);
    this.taskForm.setValue({
      task: this.tasks[0].task,
      description: this.tasks[0].description,
      dueDate: this.tasks[0].dueDate,
      status: this.tasks[0].status
   });
  }

  back(){
    this.router.navigate(['']);
  }

}
