import { AuthService } from './services/auth.service';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  { path: '', component: RegisterPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'logout', component: LogoutComponent },
  {
    path: 'products',
    loadChildren: () =>
    import('./products/products.module').then((m) => m.ProductsModule),canActivate:[AuthService]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
