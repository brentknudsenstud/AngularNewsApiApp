import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  isLoggedIn: boolean = null;
  topHeadlineCategories: string[] = ['business','entertainment','general','health','science','sports','technology'];
  dropdownStyle: string = "navItem dropdown"

  constructor(
    private fb: FirebaseService,
  ) { }

  ngOnInit(): void {
    // setTimeout(() => {
    //   this.isLoggedIn = this.fb.isLoggedIn;
    // }, 200);
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
