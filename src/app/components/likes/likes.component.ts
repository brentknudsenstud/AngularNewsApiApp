import { Component, OnInit } from '@angular/core';
import { NewsApiService } from 'src/app/services/news-api.service';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.scss']
})
export class LikesComponent implements OnInit {
  dumby = this.api.dumby;
  
  constructor(
    private api: NewsApiService,
  ) { }

  ngOnInit(): void {
  }

}
