import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

// PUBLIC_INTERFACE
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  /** Title of the app (not displayed in new design) */
  title = 'Task Manager';

  /** Array to hold task descriptions */
  tasks: string[] = [];

  /** Bound to the input field for a new task */
  newTask = '';

  // PUBLIC_INTERFACE
  /**
   * Adds a new task to the tasks array and clears the input.
   */
  addTask(): void {
    if (this.newTask && this.newTask.trim().length > 0) {
      this.tasks.unshift(this.newTask.trim());
      this.newTask = '';
    }
  }

  // PUBLIC_INTERFACE
  /**
   * Deletes a task by its index.
   * @param index Index of the task in the array to remove
   */
  deleteTask(index: number): void {
    if (index > -1 && index < this.tasks.length) {
      this.tasks.splice(index, 1);
    }
  }
}
