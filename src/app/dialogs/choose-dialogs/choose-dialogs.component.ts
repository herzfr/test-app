import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-choose-dialogs',
  templateUrl: './choose-dialogs.component.html',
  styleUrls: ['./choose-dialogs.component.scss'],
})
export class ChooseDialogsComponent implements OnInit {
  icon: any;
  message: any;

  constructor(
    public dialogRef: MatDialogRef<ChooseDialogsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.icon = data.icon;
    this.message = data.message;
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onNoClick(value: boolean): void {
    this.dialogRef.close(value);
  }
}
