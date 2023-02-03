import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SigninComponent } from 'src/app/features/@auth/signin/signin.component';
import { SignupComponent } from 'src/app/features/@auth/signup/signup.component';
import { FormContainerComponent } from 'src/app/features/@auth/form-container/form-container.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    SigninComponent,
    SignupComponent,
    FormContainerComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDividerModule,
    RouterModule,
    MatSnackBarModule,
  ],
})
export class AuthModule {
}
