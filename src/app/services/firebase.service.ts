import { Injectable } from '@angular/core';
import { Router } from '@angular/router'
import { take } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import { NewsApiService } from './news-api.service';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  user:any;
  id: string;
  isLoggedIn: boolean = null;

  users: any;
  likes: any;
  allLikes: any;

  runOnceAtStart = true;
  signOutHappening = null;
  signInDone = null;

  constructor(
    private afAuth: AngularFireAuth,
    private route: Router,
    private db: AngularFirestore,
    private api: NewsApiService,
  ) {}



  signIn() {
    const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
    this.afAuth.signInWithPopup(googleAuthProvider).then(() => {
      this.isLoggedIn = true;
      this.signOutHappening = false;
      this.signInDone = false;

      this.afAuth.authState.subscribe(data => {
        if(this.signOutHappening === true || this.signInDone === true) {} //circumvents authState.subscribe on signout;
        else {
          this.signInDone = true;
          this.user = data;
        }
      });
    });
    
  }



  signOut() {
    this.afAuth.signOut().then(x => {
      this.isLoggedIn = false;
      this.user = null;
      this.localStorageEnd();
      this.route.navigate(['/login']);
      this.signOutHappening = true;
      console.log("sign OUT");
    });
  }



  localStorageStart(userData) {
    this.user = userData;
    this.id = userData.uid;

    let isSet = localStorage.getItem("users");

    //RUNS-ON-FIRST-INITIALIZATION======================================================
    if (isSet ===  null) {
      console.log("first time");
      this.users = {};
      this.users[this.id] = [];
      this.user = this.users[this.id];
      localStorage.setItem("users", JSON.stringify(this.users));
      localStorage.setItem("allLikes", JSON.stringify(this.api.testAllLikes));  //CHANGE TO "userLikes" WHEN UR DONE TESTING!!!!!!!!!!!!!!!!!!!!!!!
      this.allLikes = this.api.allLikes;
    }
    else {
      //RUNS-WHEN-USER-IS-NEW===========================================================
      if ((JSON.parse(isSet)).hasOwnProperty(this.id) === false) {
        console.log("new user");
        this.users = JSON.parse(isSet);
        this.users[this.id] = [];
        this.user = this.users[this.id];
        localStorage.setItem("users", JSON.stringify(this.users));
      }
      //RUNS-WHEN-USER-HAS-EXISTED-PRIOR=================================================
      else {
        console.log("existing user");
        this.users = JSON.parse(isSet);
        this.user = this.users[this.id];
      }
      this.allLikes = JSON.parse(localStorage.getItem("allLikes"));
    }
  }


  localStorageEnd() {
    this.users = null;
    this.user = null;
    this.id = null;
    this.allLikes = null;
  }



  addLike(article) {
    console.log("add");
    this.users = JSON.parse(localStorage.getItem("users"));
    this.user = this.users[this.id];

    this.user.push(article);
    this.users[this.id] = this.user;
    localStorage.setItem("users", JSON.stringify(this.users));
  }

  removeLike(article) {
    console.log("remove")
    this.users = JSON.parse(localStorage.getItem("users"));
    this.user = this.users[this.id]
    for (let a = 0; a < this.user.length; a++) {
      if (this.user[a].title == article.title) {
        console.log("got it");
        this.user.splice(a, 1);
        this.users[this.id] = this.user;
        localStorage.setItem("users", JSON.stringify(this.users));
      }
    }


  }





  localStorageLog(type) {
    let look = JSON.parse(localStorage.getItem("users"));
    switch(type) {
      case "keys":
        console.log("keys: ",Object.keys(look));
        break;
      case "users":
        console.log("users: ",look);
        break;
      case "user":
        console.log("user: ",look[this.id]);
        break;
      case "id":
        console.log("id: ", this.id);
        break;
      case "compare":
        console.log(`C! fresh get:\n${this.id}\n${look[this.id]}\n${look}\n---------`);
        console.log(`C! fb Data:\n${this.id}\n${this.user}\n${this.users}`);
        break;
      case "report":
        console.log(`report:\nid: ${this.id}\nuser: ${this.user}\nusers: ${this.users}\n---------`);
        break;
      case "allLikes":
        console.log("all likes: ",this.allLikes);
        break;
      default:
        console.log(`report:\nid: ${this.id}\nuser: ${this.user}\nusers: ${this.users}\n---------`);
        break;
    }
  }

}
