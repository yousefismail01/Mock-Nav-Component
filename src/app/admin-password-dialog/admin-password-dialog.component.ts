import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-password-dialog',
  standalone: true,
  imports: [ 
    MatDialogModule,
    MatInputModule,
    FormsModule
  ],
  templateUrl: './admin-password-dialog.component.html',
  styleUrl: './admin-password-dialog.component.scss'
})
export class AdminPasswordDialogComponent {
  password: string = ''; // Define the password property
  
}
