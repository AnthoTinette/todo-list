import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CORRECT_FORM_VALIDATION } from '../../../constants/form';
import { LOCAL_STORAGE_USER_EMAIL } from '../../../constants/data';
import { TODO_ROUTE } from '../../../constants/routes';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  userEmail: string;

  constructor(private router: Router) {
    this.router = router;
  }

  ngOnInit() {
  }

  onSubmit() {
    this.emailFormControl.markAsTouched();

    if (this.emailFormControl.status === CORRECT_FORM_VALIDATION) {
      localStorage.setItem(LOCAL_STORAGE_USER_EMAIL, this.userEmail);
      this.router.navigate([TODO_ROUTE]);
    }
  }
}
