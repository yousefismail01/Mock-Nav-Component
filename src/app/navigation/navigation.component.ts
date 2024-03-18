import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service'; // Adjust the import path as necessary
import { CAPABILITIES, UserType } from '../user-types'; // Adjust the import path as necessary
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule} from '@angular/material/form-field';
import { RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatDialog } from '@angular/material/dialog';
import { AdminPasswordDialogComponent } from '../admin-password-dialog/admin-password-dialog.component';
import { ReadModeDialogComponent } from '../read-mode-dialog-component/read-mode-dialog-component.component'

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  standalone: true, 
  imports: 
  [CommonModule, 
  MatListModule, 
  MatSidenavModule, 
  MatIconModule, 
  MatToolbarModule,     
  RouterModule, 
  MatFormFieldModule,
  MatInputModule,
  ReadModeDialogComponent,
], 
})
export class NavigationComponent implements OnInit {
  userCapabilities: any[] = [];
  userType: UserType | undefined;
  openMenuItem: string | null = null; // Tracks the currently opened menu item
  password: string | undefined;

  constructor(
    private userService: UserService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.userService.currentUserType.subscribe(userType => {
      this.userCapabilities = CAPABILITIES[userType] || [];
      this.userType = userType;
    });
  }

  openMenuItems: Set<any> = new Set();

  toggleMenuItem(item: any): void {
    if (this.isMenuItemOpen(item)) {
      this.openMenuItems.delete(item);
    } else {
      this.openMenuItems.add(item);
    }
  }

  isMenuItemOpen(item: any): boolean {
    return this.openMenuItems.has(item);
  }


  changeType(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const value = selectElement.value as UserType;
  
    if (value === 'Administrator') {
      this.openAdminPasswordDialog();
    } else if (value === 'Read') {
      this.openReadModeDialog();
    } 

    // Ensure the value is actually a valid UserType
    if (Object.values(UserType).includes(value)) {
      this.userService.changeUserType(value);
    } else {
      console.error('Invalid user type:', value);
      // Handle the error or ignore the change
  }
  }

  onUserTypeChange(event: any): void {
    const userType = event.target.value;
  
    if (userType === 'Administrator') {
      const dialogRef = this.dialog.open(AdminPasswordDialogComponent, {
        width: '250px',
      });
  
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          // result is the password entered
          console.log('Admin password entered:', result);
          // validate the password and proceed accordingly
        } else {
          // Handle the case where the user cancels the dialog or no password is entered
          console.log('No password entered or dialog was cancelled.');
        }
      });
    }
}

openAdminPasswordDialog(): void {
  const dialogRef = this.dialog.open(AdminPasswordDialogComponent, {
    width: '250px',
    data: { password: this.password }
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed', result);
    // Do something with the result if necessary
  });
}

openReadModeDialog(): void {
  this.dialog.open(ReadModeDialogComponent, {
    width: '300px',
  });
}
}
