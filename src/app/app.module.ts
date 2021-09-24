import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { BrowserModule } from '@angular/platform-browser';

import { MaterialModule } from './modules/material.module';

import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './modules/app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { LoginComponent } from './components/login/login.component';
import { TopHeadlinesComponent } from './components/top-headlines/top-headlines.component';
import { EverythingComponent } from './components/everything/everything.component';
import { LikesComponent } from './components/likes/likes.component';
import { HttpClientModule } from '@angular/common/http'
import { NewsApiService } from './services/news-api.service';
import { FormsModule } from '@angular/forms';
import { ArticleTeaserComponent } from './components/article-teaser/article-teaser.component';
import { FirebaseService } from './services/firebase.service';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    LoginComponent,
    TopHeadlinesComponent,
    EverythingComponent,
    LikesComponent,
    ArticleTeaserComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    FormsModule,
  ],
  providers: [NewsApiService, FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
