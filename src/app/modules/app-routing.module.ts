import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EverythingComponent } from 'src/app/components/everything/everything.component';
import { LoginComponent } from 'src/app/components/login/login.component';
import { TopHeadlinesComponent } from 'src/app/components/top-headlines/top-headlines.component';
import { LikesComponent } from 'src/app/components/likes/likes.component';

const routes: Routes = [
  {path: "login", component: LoginComponent },
  {path: "top-headlines/:category", component: TopHeadlinesComponent},
  {path: "everything/:query", component: EverythingComponent},
  {path: "likes", component: LikesComponent},
  {path: "", redirectTo: "/login", pathMatch: "full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
