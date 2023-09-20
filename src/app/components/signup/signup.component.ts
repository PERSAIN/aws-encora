import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  private router: Router = inject(Router);

  public signUp: FormGroup = new FormGroup({
    email: new FormControl<string | null>('', {
      validators: [Validators.required, Validators.email],
    }),
    password: new FormControl<string | null>('', {
      validators: [Validators.required],
    }),
    name: new FormControl<string | null>('', {
      validators: [Validators.required],
    }),
    lastName: new FormControl<string | null>('', {
      validators: [Validators.required],
    }),
  });

  public signUpSubmit(): void {
    const email = this.signUp.value.email;
    const password = this.signUp.value.password;
    const name = this.signUp.value.name;
    const lastName = this.signUp.value.lastName;

    console.log('signUp', {
      email,
      name,
      lastName,
      password,
    });

    this.router.navigate(['/login']);
  }
}
