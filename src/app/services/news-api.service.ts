import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {
  apiKey: string = "75e20b21ea8f499190960a2dfbc5f410";
  apiPayload: any = "loading";

  constructor(
    private http: HttpClient,
  ) { }

  topHeadlinesEndpoint(category: string) {
    this.apiPayload = "loading";
    let link = `'https://newsapi.org/v2/top-headlines?category=${category}&apiKey=${this.apiKey}`;
    this.http.get(link).subscribe(data => {
      this.apiPayload = data;
    });
  }

  everythingEndpoint(query: string) {
    this.apiPayload = "loading";
    let link = `https://newsapi.org/v2/everything?q=${query}&apiKey=${this.apiKey}`;
    this.http.get(link).subscribe(data => {
      this.apiPayload = data;
    });
  }
  
}
