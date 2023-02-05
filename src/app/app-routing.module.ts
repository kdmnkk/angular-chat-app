import { NgModule } from '@angular/core';
import {
  canActivate,
  redirectLoggedInTo,
  redirectUnauthorizedTo,
} from '@angular/fire/compat/auth-guard';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from 'src/app/features/@auth/signin/signin.component';
import { SignupComponent } from 'src/app/features/@auth/signup/signup.component';

const routes: Routes = [
  {
    path: 'sign-in',
    component: SigninComponent,
    ...canActivate(() => redirectLoggedInTo(['chat'])),
  },
  {
    path: 'sign-up',
    component: SignupComponent,
    ...canActivate(() => redirectLoggedInTo(['chat'])),
  },
  {
    path: 'chat',
    ...canActivate(() => redirectUnauthorizedTo(['sign-in'])),
    loadChildren: () => import('./features/@chat/chat.module').then(m => m.ChatModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
