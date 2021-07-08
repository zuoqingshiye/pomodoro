import { Component, OnInit, Inject } from '@angular/core';
import { Task } from '../task/task';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-task-dialog',
  templateUrl: './task-dialog.component.html',
  styleUrls: ['./task-dialog.component.css']
})
export class TaskDialogComponent{

  private backupTask: Partial<Task> = { ...this.data.task };
  isCanceled = true;

  constructor(
    public dialogRef: MatDialogRef<TaskDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: TaskDialogData
  ) { }

  cancel(): void {
    // this.data.task.title = this.backupTask.title;
    // this.data.task.description = this.backupTask.description;
    this.dialogRef.close(
      // this.data
      );
  }

}

export interface TaskDialogData {
  task: Partial<Task>;
  enableDelete: boolean;
}

export interface TaskDialogResult {
  task: Task;
  delete?: boolean;
}
