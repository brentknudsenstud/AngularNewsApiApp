import { Component } from '@angular/core';
import { NewsApiService } from './services/news-api.service';

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

  constructor(
    public data: NewsApiService,
  ) {}

  ngOnInit() {
    if (window.innerWidth > 650) { 
      this.data.sideNavShouldOpen = true;
    }
    else { 
      this.data.sideNavShouldOpen = false; 
    }
  }

  sizeClick() {
    if(this.data.sideNavShouldOpen === true) { this.data.sideNavShouldOpen = false; }
    else if(this.data.sideNavShouldOpen === false) { this.data.sideNavShouldOpen = true; }

    if (window.innerWidth < this.sideHideWidth && this.data.sideNavShouldOpen == true) {
      document.getElementById('content').className = 'noDisplay';
    }
    else {
      document.getElementById('content').className = '';
    }
  }
  
  mediaQueryFunc() {
    //SHOULD-SIDENAV-BE-OPEN-BY-DEFAULT=====================================================
    if (window.innerWidth > this.sideRespWidth && this.data.sideNavShouldOpen != true) {
      this.data.sideNavShouldOpen = true;
    }
    else if (window.innerWidth < this.sideRespWidth && this.data.sideNavShouldOpen != false) {
      this.data.sideNavShouldOpen = false;
    }

    //HIDE-CONTENT-WHEN-SIDENAV-OPENS-TO-CERTAIN-WIDTH======================================
    if (document.getElementById('content').className == "noDisplay") {
      document.getElementById('content').className = '';
    }
  }

}
