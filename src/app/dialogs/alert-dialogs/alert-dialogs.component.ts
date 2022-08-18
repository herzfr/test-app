import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-alert-dialogs',
  templateUrl: './alert-dialogs.component.html',
  styleUrls: ['./alert-dialogs.component.scss'],
})
export class AlertDialogsComponent implements OnInit {
  icon: any;
  message: any;

  constructor(
    public dialogRef: MatDialogRef<AlertDialogsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.icon = data.icon;
    this.message = data.message;
  }
  ngOnInit(): void {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
