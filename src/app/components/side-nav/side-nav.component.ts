import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  topHeadlineCategories: string[] = ['business','entertainment','general','health','science','sports','technology'];
  dropdownStyle: string = "navItem dropdown"

  constructor(
    public fb: FirebaseService,
    private afAuth: AngularFireAuth,
  ) { }

  ngOnInit(): void {
    this.afAuth.authState.subscribe(userState => {
      if (userState === null) {
        this.fb.user = null;
        this.fb.isLoggedIn = false;
        console.log("not in")
      }
      else {
        this.fb.user = userState;
        this.fb.isLoggedIn = true;
        console.log("already in");
        if (this.fb.runOnceAtStart === true) {
          console.log("HA!");
          this.fb.runOnceAtStart = false;
        }
      }
    });
  }

  toggleDropdown() {
    if (this.dropdownStyle == "navItem dropdown") {
      this.dropdownStyle = "navItem dropdown heightForSublinks";
    } else {
      this.dropdownStyle = "navItem dropdown";
    }
  }

  collapseSublinks() {
    this.dropdownStyle = "navItem dropdown";
  }

  signOut() {
    this.fb.signOut();
  }

}
