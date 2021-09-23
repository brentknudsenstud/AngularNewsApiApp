import { Injectable } from '@angular/core';
import { Router } from '@angular/router'
import { take } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  isLoggedIn: boolean = null;
  signOutHappening = null;
  user:any;

  constructor(
    private afAuth: AngularFireAuth,
    private route: Router,
    private db: AngularFirestore,
  ) {}


  signIn() {
    const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
    this.afAuth.signInWithPopup(googleAuthProvider).then(() => {
      this.isLoggedIn = true;
      this.signOutHappening = false;
      this.afAuth.authState.subscribe(data => {

        if(this.signOutHappening === true) {} //circumvents authState.subscribe on signout;
        else {
          this.user = data;
          this.development(this.user.uid);
        }
      });
    });
    
  }

  signOut() {
    this.afAuth.signOut().then(x => {
      this.isLoggedIn = false;
      this.user = null;
      this.route.navigate(['/login']);
      this.signOutHappening = true;
    });
  }

  development(id) {
    console.log(id);
    let ref = this.db.doc(`/users/${id}`);
    ref.set({}, { merge: true});
    
  }

}
