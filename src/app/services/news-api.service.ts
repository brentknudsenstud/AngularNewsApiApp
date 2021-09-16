import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {
  apiKey: string = "75e20b21ea8f499190960a2dfbc5f410";
  categories = ['business','entertainment','general','health','science','sports','technology'];

  constructor(
    private http: HttpClient,
  ) { }

  topHeadlinesEndpoint(category: any) {
    let link = `https://newsapi.org/v2/top-headlines?category=${category}&apiKey=${this.apiKey}`;
    return link;
  }

  everythingEndpoint(query: string, category: any) {
    if (category === "general") {
      let link = `https://newsapi.org/v2/everything?q=${query}&apiKey=${this.apiKey}`;
      return link;
    }
    else if (this.categories.includes(category)) {
      let link = `https://newsapi.org/v2/top-headlines?category=${category}&q=${query}&apiKey=${this.apiKey}`;
      return link;
    }
    else {
      let link = `https://newsapi.org/v2/everything?q=${query}&apiKey=${this.apiKey}`;
      return link;
    }

  }

}
