import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  private router: Router = inject(Router);

  public loginForm: FormGroup = new FormGroup({
    email: new FormControl<string | null>('', {
      validators: [Validators.required],
    }),
    password: new FormControl<string | null>('', {
      validators: [Validators.required],
    }),
    errorMessage: new FormControl<string | null>(''),
  });

  public logIn(): void {
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;
    let errorOccurred = false;

    console.log('logIn', {
      email,
      password,
    });
  
    if (email !== 'juan') {
      alert('Wrong username');
      errorOccurred = true;
    }
  
    if (password !== 'encora') {
      alert('Wrong password');
      errorOccurred = true;
    }
  
    if (!errorOccurred) {
      const token = Math.random().toString();
      localStorage.setItem('token', token);
      this.router.navigate(['/']);
    }
  }
  
  
}