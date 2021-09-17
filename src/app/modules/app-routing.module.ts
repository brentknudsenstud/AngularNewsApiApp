import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EverythingComponent } from 'src/app/components/everything/everything.component';
import { LoginComponent } from 'src/app/components/login/login.component';
import { TopHeadlinesComponent } from 'src/app/components/top-headlines/top-headlines.component';
import { LikesComponent } from 'src/app/components/likes/likes.component';
import { AuthGuard } from '../guards/auth.guard';

const routes: Routes = [
  {path: "login", component: LoginComponent },
  {path: "top-headlines/:category", component: TopHeadlinesComponent, canActivate: [AuthGuard] },
  {path: "everything/:query/:category", component: EverythingComponent, canActivate: [AuthGuard] },
  {path: "likes", component: LikesComponent, canActivate: [AuthGuard] },
  {path: "", redirectTo: "/login", pathMatch: "full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
