import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Task } from '../../mock-tasks';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent implements OnInit {
  @Input() task!: Task;
  @Output() onDeleteTask = new EventEmitter();
  @Output() onToggleTask = new EventEmitter();
  faTimes = faTimes;

  ngOnInit(): void {}

  onDelete() {
    this.onDeleteTask.emit();
  }
  onToggle() {
    this.onToggleTask.emit();
    this.task.reminder = !this.task.reminder;
  }
}
