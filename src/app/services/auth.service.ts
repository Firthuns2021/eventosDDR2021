import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _isLoggued: boolean;

  constructor(
    private afAuth: AngularFireAuth
  ) {
    // eslint-disable-next-line no-underscore-dangle
    this._isLoggued = false;

    this.afAuth.authState.subscribe(user => {
      if (user) {
        // eslint-disable-next-line no-underscore-dangle
        this._isLoggued = true;
      }
    });
  }

  get isLogged() {
    // eslint-disable-next-line no-underscore-dangle
    return this._isLoggued;
  }

  set isLogged(value: boolean) {
    // eslint-disable-next-line no-underscore-dangle
    this._isLoggued = value;
  }

  login(email: string, pass: string) {
    return this.afAuth.signInWithEmailAndPassword(email, pass);
  }

  logout() {
    this.afAuth.signOut();
    // eslint-disable-next-line no-underscore-dangle
    this._isLoggued = false;
  }

  currentUser(){
    if(this.afAuth.currentUser){
      return this.afAuth.currentUser;
    }
    return null;
  }

  createAccount(email: string, pass: string) {

    return this.afAuth.isSignInWithEmailLink(email).then(result => {
      if (result) {
        return new Promise((resolve, reject) => {
          reject('User exists');
        });
      } else {
        return this.afAuth.createUserWithEmailAndPassword(email, pass).then( auth => auth).catch(error => {
          throw error;
        });
      }
    });

  }

}
