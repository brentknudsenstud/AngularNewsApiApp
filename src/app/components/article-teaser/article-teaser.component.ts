import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-teaser',
  templateUrl: './article-teaser.component.html',
  styleUrls: ['./article-teaser.component.scss']
})
export class ArticleTeaserComponent implements OnInit {
  dumby = {
    source: {
      id: "ars-technica",
      name: "Ars Technica"
      },
      author: "Jonathan M. Gitlin",
      title: "House infrastructure bill includes new tax credits for new and used EVs",
      description: "There are price and earnings caps on the tax credits, plus made-in-USA requirements.",
      url: "https://arstechnica.com/cars/2021/09/house-infrastructure-bill-includes-new-tax-credits-for-new-and-used-evs/",
      urlToImage: "https://cdn.arstechnica.net/wp-content/uploads/2021/09/GettyImages-1201454382-760x380.jpg",
      publishedAt: "2021-09-13T15:02:07Z",
      content: "Enlarge/ The House Ways and Means Committee has proposed a wide-ranging overhaul of the current electric vehicle incentives as part of the infrastructure bill. \r\n12 with 11 posters participating, inc… [+6370 chars]"
  }

  constructor() { }

  ngOnInit(): void {
  }

  yee(event) {
    let curClass = event.path[2].className;
    if (curClass === "container1") {
      curClass = "container1 setOpacity"
      event.path[2].className = curClass;
    }
    else {
      curClass = "container1";
      event.path[2].className = curClass;
    }
    // console.log(event.path[2].className) //className classList
  }

}