import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormBuilder } from '@angular/forms';
import { FirebaseService } from 'src/app/services/firebase.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    public fb: FirebaseService,
    public afAuth: AngularFireAuth,
  ) {}

  ngOnInit(): void {}

  signIn() {
    this.fb.signIn();
  }

  // test() {
  //   this.afAuth.authState.subscribe(c => console.log(c));
  //   console.log(this.fb.user);
  //   console.log("Logged:",this.fb.isLoggedIn);
  // }
}
