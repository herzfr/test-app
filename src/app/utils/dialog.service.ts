import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AlertDialogsComponent } from '../dialogs/alert-dialogs/alert-dialogs.component';
import { ChooseDialogsComponent } from '../dialogs/choose-dialogs/choose-dialogs.component';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  constructor(private dialog: MatDialog) {}

  public alertDialog(icon: any, message: any) {
    const dialogConfig = new MatDialogConfig();

    let obj: any = new Object();
    obj.icon = icon;
    obj.message = message;

    dialogConfig.data = obj;
    dialogConfig.backdropClass = 'backdropBackground';
    dialogConfig.disableClose = true;
    dialogConfig.minWidth = '200px';

    const dialogCustom = this.dialog.open(AlertDialogsComponent, dialogConfig);
    dialogCustom.afterClosed();
  }

  public customChoiceDialog(icon: any, message: any, okTitle: string) {
    const dialogConfig = new MatDialogConfig();

    let obj: any = new Object();
    obj.icon = icon;
    obj.message = message;
    obj.okTitle = okTitle;

    dialogConfig.data = obj;
    dialogConfig.backdropClass = 'backdropBackground';
    dialogConfig.disableClose = true;
    dialogConfig.minWidth = '200px';

    const dialogCustom = this.dialog.open(ChooseDialogsComponent, dialogConfig);

    return dialogCustom.afterClosed();
  }
}
