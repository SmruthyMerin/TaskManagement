import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskService } from '../../services/task.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrl: './task-details.component.css'
})
export class TaskDetailsComponent {
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
      dueDate: [''],
    });
    this.id = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.getTaskList();
  }

  getTaskList(){
    this.tasks = this.taskService.taskDetails(this.id);
    console.log(this.tasks);
  }

  back(){
    this.router.navigate(['']);
  }
}
