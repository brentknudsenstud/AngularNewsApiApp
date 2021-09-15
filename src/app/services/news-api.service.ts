import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {
  apiKey: string = "75e20b21ea8f499190960a2dfbc5f410";

  constructor(
    private http: HttpClient,
  ) { }

  topHeadlinesEndpoint(type: string, category: any) {
    let link = "https://newsapi.org/v2/top-headlines?"

    switch (type) {
      case "top-headlines":
        link = link +`category=${category}&apiKey=${this.apiKey}`;
        return link;
        break;
      case "everything":
        link = link + `category=general&q=${category}&apiKey=${this.apiKey}`;
        return link;
        break;
    }
    return "";

  }

  everythingEndpoint(query: string) {
    let link = `https://newsapi.org/v2/everything?q=${query}&apiKey=${this.apiKey}`;
    // this.http.get(link).subscribe(data => {
    //   this.apiPayload = data;
    // });
  }

}
