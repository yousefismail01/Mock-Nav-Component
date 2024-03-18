import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-read-mode-dialog',
  standalone: true,
  templateUrl: './read-mode-dialog-component.component.html',
  imports: [    
    MatDialogModule,
    MatInputModule,
    FormsModule],
  styleUrl: './read-mode-dialog-component.component.scss'
})
export class ReadModeDialogComponent {
}
