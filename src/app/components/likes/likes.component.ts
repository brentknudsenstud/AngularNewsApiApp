import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { NewsApiService } from 'src/app/services/news-api.service';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.scss']
})
export class LikesComponent implements OnInit {
  dumby = this.api.dumby;
  userData = null;
  allLikes = this.api.testAllLikes;
  
  constructor(
    private api: NewsApiService,
    private fb: FirebaseService,
  ) { }

  ngOnInit(): void {
    this.userData = JSON.parse(localStorage.getItem("users"))[this.fb.id];
  }

}
