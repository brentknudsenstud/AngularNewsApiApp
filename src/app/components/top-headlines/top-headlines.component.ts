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