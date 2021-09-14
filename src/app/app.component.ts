import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  sideNavShouldOpen = true;
  sideRespWidth = 650;

  shouldOpen() {
    if (window.innerWidth > this.sideRespWidth && this.sideNavShouldOpen != true) {
      this.sideNavShouldOpen = true;
    }
    else if (window.innerWidth < this.sideRespWidth && this.sideNavShouldOpen != false) {
      this.sideNavShouldOpen = false;
    }
  }

}
