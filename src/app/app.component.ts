import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  sideNavShouldOpen:boolean = null;
  sideRespWidth:number = 650;
  sideHideWidth:number = 496;
  lastWidth:number;

  constructor() {}

  ngOnInit() {
    if (window.innerWidth > 650) { 
      this.sideNavShouldOpen = true;
    }
    else { 
      this.sideNavShouldOpen = false; 
    }
  }

  sizeClick() {
    if(this.sideNavShouldOpen === true) { this.sideNavShouldOpen = false; }
    else if(this.sideNavShouldOpen === false) { this.sideNavShouldOpen = true; }

    if (window.innerWidth < this.sideHideWidth && this.sideNavShouldOpen == true) {
      document.getElementById('content').className = 'noDisplay';
    }
    else {
      document.getElementById('content').className = '';
    }
  }


  test() {
    if(this.sideNavShouldOpen === true) { console.log("open: ", this.sideNavShouldOpen)}
    if(this.sideNavShouldOpen === false) { console.log("close: ", this.sideNavShouldOpen)}
  }

  
  mediaQueryFunc() {
    //SHOULD-SIDENAV-BE-OPEN-BY-DEFAULT=====================================================
    if (window.innerWidth > this.sideRespWidth && this.sideNavShouldOpen != true) {
      this.sideNavShouldOpen = true;
    }
    else if (window.innerWidth < this.sideRespWidth && this.sideNavShouldOpen != false) {
      this.sideNavShouldOpen = false;
    }

    //HIDE-CONTENT-WHEN-SIDENAV-OPENS-TO-CERTAIN-WIDTH======================================
    if (document.getElementById('content').className == "noDisplay") {
      document.getElementById('content').className = '';
    }
  }

}
