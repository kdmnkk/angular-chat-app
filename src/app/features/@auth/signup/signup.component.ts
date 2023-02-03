import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/features/@auth/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignupComponent implements OnInit {
  form!: FormGroup;

  constructor(private auth: AuthService, private router: Router, private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      displayName: new FormControl('', [Validators.minLength(3)]),
      email: new FormControl('', [Validators.email]),
      password: new FormControl('', [Validators.minLength(6)]),
    });
  }

  signUp() {
    console.log('signup with: ', this.form.value);
    this.auth.signUp(this.form.value).subscribe({
      next: () => this.router.navigate(['chat']),
      error: (error) => this.snackBar.open(error.message, 'OK'),
    });
  }

}
