import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";

import { User } from "../models/uesr";
import { ClientService } from "../services/client.service";
import { login } from "../store/auth/auth.actions";



@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: [
    './login-page.component.css',
    '../register-page/register-page.component.css',
  ],
})
export class LoginPageComponent {
  public form = new FormGroup({
    email: new FormControl(null, [Validators.email, Validators.required]),
    password: new FormControl(null, [Validators.required]),
  });
  constructor(
    private client: ClientService,
    private router: Router,
    private fb: FormBuilder,
    private store:Store
  ) {}
  onSubmit() {
    console.log(this.form);
    if (this.form.status === 'VALID') {
      let u: User = {
        email: this.form.value.email!,
        password: this.form.value.password!,
      };
      this.client.loggin(u).subscribe(
        (res: any) => {
          console.log(res);
          this.store.dispatch(login({ user: res.tocken }));
          this.router.navigateByUrl('/products');

        },
        (err) => {
          console.warn(err);
        }
      );
    }
  }
}
