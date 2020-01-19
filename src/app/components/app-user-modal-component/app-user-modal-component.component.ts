import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { LOCAL_STORAGE_USER_EMAIL } from '../../../constants/data';
import { LOGIN_ROUTE } from '../../../constants/routes';

@Component({
  selector: 'app-user-option-modal',
  templateUrl: 'user-option-modal.html',
})
export class AppUserModalComponent {
  constructor(private router: Router, private bottomSheetRef: MatBottomSheetRef<AppUserModalComponent>) {}

  onDisconnect(): void {
    localStorage.removeItem(LOCAL_STORAGE_USER_EMAIL);
    this.bottomSheetRef.dismiss();
    this.router.navigate([LOGIN_ROUTE]);
  }
}

