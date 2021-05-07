import { Component, OnInit } from '@angular/core';
import { Task } from '../../mock-tasks';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }

  deleteTask(id: number) {
    this.taskService
      .deleteTask(id)
      .subscribe(() => (this.tasks = this.tasks.filter((t) => t.id !== id)));
  }
}