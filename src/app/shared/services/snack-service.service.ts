import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackServiceService {

  constructor(private snackBar: MatSnackBar) { }

  showMessage(message: string) {
    this.snackBar.open(message, 'fechar', {
      duration: 5000,
      verticalPosition: 'top',
      horizontalPosition: 'right',
      panelClass: 'snack-error'
    });
  }
}
