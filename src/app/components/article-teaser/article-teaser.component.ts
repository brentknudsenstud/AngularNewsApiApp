import { Input, Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { NewsApiService } from 'src/app/services/news-api.service';

@Component({
  selector: 'app-article-teaser',
  templateUrl: './article-teaser.component.html',
  styleUrls: ['./article-teaser.component.scss']
})
export class ArticleTeaserComponent implements OnInit {
  @Input() data?;
  @Input() userLikes?;
  @Input() allLikes?;

  obj = {
    "source": {
        "id": "usa-today",
        "name": "USA Today"
    },
    "author": "Jeanine Santucci, USA TODAY",
    "title": "Masks help keep students safe from COVID, studies say; vaccine mandate for NYC teachers temporarily blocked. Latest COVID-19 updates - USA TODAY",
    "description": "NYC schools temporarily blocked from enforcing teacher vaccine mandate. COVID outbreaks more common when schools didn't mandate masks, studies say.",
    "url": "https://www.usatoday.com/story/news/health/2021/09/25/masks-help-prevent-students-catching-covid-19-live-updates/5848277001/",
    "urlToImage": "https://www.gannett-cdn.com/presto/2021/09/20/USAT/f9557c8d-5350-4b69-8e49-0a5ce95a6c0d-USATSI_16770148.jpg?auto=webp&crop=5886,3311,x0,y358&format=pjpg&width=1200",
    "publishedAt": "2021-09-25T16:18:45Z",
    "content": "CDC Director Rochelle Walensky has rejected a recommendation of a CDC advisory panel and instead expanded the list of people eligible for a COVID-19 booster shot to include those who are at greater r… [+7161 chars]"
}

  constructor(
    private api: NewsApiService,
    private fb: FirebaseService,
  ) {}

  ngOnInit(): void {
  }

  multiBtn(event) {
    let curClass = event.path[1].children[1].className;
    if (curClass === "container1") {
      curClass = "container1 noDisplay"
      event.path[1].children[1].className = curClass;
    }
    else {
      curClass = "container1";
      event.path[1].children[1].className = curClass;
    }
  }

  clickLike(event, data) {
    let heartClass = event.target.className;

    if (heartClass.includes("icon-white")) {
      event.target.className = "fas fa-heart heart-pink"
      this.fb.addLike(data);
    }
    else {
      event.target.className = "fas fa-heart icon-white"
      this.fb.removeLike(data); 
    }
  }

  isAlreadyLiked(data) {
    for (let a = 0; a < this.userLikes.length; a++) {
      if (this.userLikes[a].title == data.title) {
        return "fas fa-heart heart-pink";
      }
    }
    return "fas fa-heart icon-white";
  }

}