import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  isLoggedIn = true;
  topHeadlineCategories = ['business','entertainment','general','health','science','sports','technology'];
  dropdownStyle = "navItem dropdown"

  constructor() { }

  ngOnInit(): void {
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

}
