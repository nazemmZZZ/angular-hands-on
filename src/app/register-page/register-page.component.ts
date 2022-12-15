import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientService } from '../services/client.service';
import { User } from '../models/uesr';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css'],
})
export class RegisterPageComponent {
  onSubmit() {
    console.log(this.form);
    if (this.form) {
      let u: User = {
        email: this.form.value.email!,
        password: this.form.value.password!,
      };
      console.log(u);
      this.client.register(u).subscribe(
        (res: any) => {
          if (res.tocken) {
           this.router.navigateByUrl('/login')
          }
        },
        (err) => {
          this.servererr = err.error.error;
          console.log('====================================');
          console.log(err);
          console.log('====================================');
        }
      );
    }
  }
  servererr=null

  form = new FormGroup(
    {
      email: new FormControl(null, [Validators.email, Validators.required]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
      ]),
      confPasswd: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
      ]),
    },
    {
      validators: this.coformationOfPassword,
    }
  );
  coformationOfPassword(control: AbstractControl) {
    const password: string = control.get('password')?.value;
    const confirmPassword: string = control.get('confPasswd')?.value;
    if (password !== confirmPassword) {
      control.get('confPasswd')?.setErrors({ mismatch: true });
    }
    return null;
  }
  constructor(private client: ClientService, private router: Router) {}
}

