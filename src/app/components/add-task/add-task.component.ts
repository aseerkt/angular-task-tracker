import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Task } from '../../mock-tasks';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  text: string = '';
  day: string = '';
  reminder: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    const { text, day, reminder } = this;
    if (!text) {
      alert('Please add task');
      return;
    }
    console.log(reminder);
    const newTask: Task = { text, day, reminder };
    this.onAddTask.emit(newTask);
  }
}
