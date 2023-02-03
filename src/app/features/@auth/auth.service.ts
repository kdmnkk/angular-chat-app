import { Injectable } from '@angular/core';
import {
  Auth,
  authState,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from '@angular/fire/auth';
import { from, switchMap } from 'rxjs';
import { SingInInterface, SingUpInterface } from 'src/app/features/@auth/auth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  readonly isLoggedIn$ = authState(this.auth);

  constructor(private auth: Auth) { }

  signIn({ email, password }: SingInInterface) {
    return from( signInWithEmailAndPassword(this.auth, email, password));
  }

  signUp({ email, password, displayName }: SingUpInterface) {
    return from(createUserWithEmailAndPassword(this.auth, email, password)).pipe(
      switchMap(({user}) => updateProfile(user, { displayName }))
    );
  }

  signOut() {
    return from(this.auth.signOut());
  }
}
