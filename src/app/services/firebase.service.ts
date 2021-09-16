import { Injectable } from '@angular/core';
import { Router } from '@angular/router'
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  isLoggedIn: boolean = null;
  user:any;

  constructor(
    public afAuth: AngularFireAuth,
    public route: Router,
  ) { }

  signIn() {
    const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
    this.afAuth.signInWithPopup(googleAuthProvider).then(() => {
      this.isLoggedIn = true;
      this.afAuth.authState.subscribe(data => {
        this.user = data;
      });
    });
    
  }

  signOut() {
    this.afAuth.signOut();
    this.isLoggedIn = false;
    this.user = null;
    this.route.navigate(['/login'])
  }

}
