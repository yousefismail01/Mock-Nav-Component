import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserType } from './user-types'; 

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // Initialize the BehaviorSubject with a default user type
  private currentUserTypeSource = new BehaviorSubject<UserType>(UserType.HelpDesk);
  currentUserType = this.currentUserTypeSource.asObservable();

  constructor() { }

  // Method to change the user type
  changeUserType(type: UserType): void {
    this.currentUserTypeSource.next(type);
  }
}
