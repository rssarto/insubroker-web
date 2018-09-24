import { AlertDialogComponent } from './alert-dialog/alert-dialog.component';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  constructor(private dialog: MatDialog, public snackBar: MatSnackBar) {}

  alertDialog(messagem: string) {
    this.dialog.open(AlertDialogComponent, {
      width: '250px',
      data: {message: messagem}
    });
  }

  alertSnackBar(message: string) {
    this.snackBar.open(message, 'Fechar', { duration: 2000});
  }

}
