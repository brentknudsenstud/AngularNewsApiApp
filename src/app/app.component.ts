import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FirebaseService } from './services/firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  sideNavShouldOpen:boolean = null;
  sideRespWidth:number = 650;

  constructor(
    public afAuth: AngularFireAuth,
    private fb: FirebaseService,
  ) {}

  ngOnInit() {
    this.afAuth.authState.subscribe(userState => {
      if (userState === null) {
        this.fb.user = null;
        this.fb.isLoggedIn = false;
      }
      else {
        this.fb.user = userState;
        this.fb.isLoggedIn = true;
      }
    });

    if (window.innerWidth > 650) { 
      this.sideNavShouldOpen = true;
    }
    else { 
      this.sideNavShouldOpen = false; 
    }
  }

  shouldOpen() {
    if (window.innerWidth > this.sideRespWidth && this.sideNavShouldOpen != true) {
      this.sideNavShouldOpen = true;
    }
    else if (window.innerWidth < this.sideRespWidth && this.sideNavShouldOpen != false) {
      this.sideNavShouldOpen = false;
    }
  }

}
