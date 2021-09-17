import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { FirebaseService } from '../services/firebase.service';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private afAuth: AngularFireAuth,
    private route: Router,
    private fb: FirebaseService,
  ) {}

  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean | UrlTree> {
      let userState;
      let wait = await this.afAuth.authState.pipe(take(1)).toPromise().then(x => { 
        userState = x;
      });
      const isAuthenticated = userState != null ? true : false;
      if (!isAuthenticated) {
        this.route.navigate(['/login']);
      }
      return isAuthenticated;
  }
  
}
