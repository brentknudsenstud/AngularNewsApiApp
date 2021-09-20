import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  sideNavShouldOpen:boolean = null;
  sideRespWidth:number = 650;

  constructor() {}

  ngOnInit() {
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
