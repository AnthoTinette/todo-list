import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { AppUserModalComponent } from './components/app-user-modal-component/app-user-modal-component.component';
import { LOCAL_STORAGE_USER_EMAIL } from '../constants/data';
import { LOGIN_ROUTE, TODO_ROUTE } from '../constants/routes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo-app';
  data = {
    userName: '',
  };
  isLogged = !!this.isUserLogged();

  constructor(private router: Router, private bottomSheet: MatBottomSheet) {
    this.router = router;
    this.router.events.subscribe(() => {
      this.isLogged = !!this.isUserLogged();
      this.data.userName = this.getUserName() || 'N/A';
    });
  }

  isUserLogged(): string {
    return localStorage.getItem(LOCAL_STORAGE_USER_EMAIL);
  }

  openBottomSheet(): void {
    this.bottomSheet.open(AppUserModalComponent);
  }

  getUserName(): string {
    return localStorage.getItem(LOCAL_STORAGE_USER_EMAIL);
  }
}
