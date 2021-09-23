import { Component, OnInit } from '@angular/core';
import { NewsApiService } from 'src/app/services/news-api.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from "@angular/common/http"

@Component({
  selector: 'app-top-headlines',
  templateUrl: './top-headlines.component.html',
  styleUrls: ['./top-headlines.component.scss']
})
export class TopHeadlinesComponent implements OnInit {
  apiPayload: any = "loading";
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

  constructor(
    private api: NewsApiService,
    private route: ActivatedRoute,
    private http: HttpClient,
  ) {}

  ngOnInit(): void {
    this.route.url.subscribe( url => {
      const category = url[1].path;
      const link = this.api.topHeadlinesEndpoint(category);
      // this.http.get(link).subscribe(data => {
      //   this.apiPayload = data;
      // });
      this.apiPayload = link;
    });
  }

}