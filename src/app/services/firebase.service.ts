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
    });
  }



  localStorageStart(userData) {
    this.user = userData;
    this.id = userData.uid;

    let isSet = localStorage.getItem("users");

    //RUNS-ON-FIRST-INITIALIZATION======================================================
    if (isSet ===  null) {
      this.users = {};
      this.users[this.id] = [];
      this.user = this.users[this.id];
      localStorage.setItem("users", JSON.stringify(this.users));
      localStorage.setItem("allLikes", JSON.stringify(this.api.allLikes));  //CHANGE TO "userLikes" WHEN UR DONE TESTING!!!!!!!!!!!!!!!!!!!!!!!
      this.allLikes = this.api.allLikes;
    }
    else {
      //RUNS-WHEN-USER-IS-NEW===========================================================
      if ((JSON.parse(isSet)).hasOwnProperty(this.id) === false) {
        this.users = JSON.parse(isSet);
        this.users[this.id] = [];
        this.user = this.users[this.id];
        localStorage.setItem("users", JSON.stringify(this.users));
      }
      //RUNS-WHEN-USER-HAS-EXISTED-PRIOR=================================================
      else {
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
    this.users = JSON.parse(localStorage.getItem("users"));
    this.user = this.users[this.id];

    //ADD-TO-USER-LIKES==============================================
    this.user.push(article);
    this.users[this.id] = this.user;
    localStorage.setItem("users", JSON.stringify(this.users));

    //ADD-TO-ALL-LIKES===============================================
    this.allLikes = JSON.parse(localStorage.getItem("allLikes"));
    for (let a = 0; a < this.allLikes.length; a++) {
      if(this.allLikes[a].article.title == article.title) {
        this.allLikes[a].count++;
        localStorage.setItem("allLikes", JSON.stringify(this.allLikes));
        return;
      }
    }
    this.allLikes.push({count: 1, article: article});
    localStorage.setItem("allLikes", JSON.stringify(this.allLikes));
    return;
  }

  removeLike(article) {
    this.users = JSON.parse(localStorage.getItem("users"));
    this.user = this.users[this.id]

    //REMOVE-FROM-USER-LIKES========================================
    for (let a = 0; a < this.user.length; a++) {
      if (this.user[a].title == article.title) {
        this.user.splice(a, 1);
        this.users[this.id] = this.user;
        localStorage.setItem("users", JSON.stringify(this.users));
      }
    }

    //REMOVE-FROM-ALL-LIKES
    this.allLikes = JSON.parse(localStorage.getItem("allLikes"));
    for (let a = 0; a < this.allLikes.length; a++) {
      if(this.allLikes[a].article.title == article.title) {
        console.log("we're in")
        if (this.allLikes[a].count == 1) {
          console.log("its 1 its gone");
          this.allLikes.splice(a, 1);
          localStorage.setItem("allLikes", JSON.stringify(this.allLikes));
          return;
        }
        else {
          console.log("take away 1");
          this.allLikes[a].count--;
          localStorage.setItem("allLikes", JSON.stringify(this.allLikes));
          return;
        }
      }
    }
  }

  validAllLikes(allLikes) {
    let valid = [];
    for (let l = 0; l < allLikes.length; l++) {
      if (allLikes[l].count > 1) { valid.push(allLikes[l].article);}
    }
    return valid;
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
