import { Component, ViewChild } from '@angular/core';
import { UserService } from './user.service'; // Adjust the path as necessary
import { NavigationComponent } from './navigation/navigation.component';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { AdminPasswordDialogComponent } from './admin-password-dialog/admin-password-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ReadModeDialogComponent } from './read-mode-dialog-component/read-mode-dialog-component.component'

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [NavigationComponent, MatSidenavModule, AdminPasswordDialogComponent, MatDialogModule, ReadModeDialogComponent]
})
export class AppComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  constructor(private userService: UserService) {}

}
