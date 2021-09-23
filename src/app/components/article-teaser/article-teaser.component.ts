import { Input, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-teaser',
  templateUrl: './article-teaser.component.html',
  styleUrls: ['./article-teaser.component.scss']
})
export class ArticleTeaserComponent implements OnInit {
  @Input() data?;

  constructor() {}

  ngOnInit(): void {
  }

  multiBtn(event) {
    let curClass = event.path[1].children[1].className;
    if (curClass === "container1") {
      curClass = "container1 setOpacity"
      event.path[1].children[1].className = curClass;
    }
    else {
      curClass = "container1";
      event.path[1].children[1].className = curClass;
    }
  }

  likeClicked() {

  }

}