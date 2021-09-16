import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FirebaseService } from 'src/app/services/firebase.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isSignedIn: boolean = true;

  constructor(
    private fb: FirebaseService,
  ) { }

  ngOnInit(): void {

  }

  signIn() {
    this.fb.signIn();
  }

  test() {
    console.log(this.fb.isLoggedIn);
    console.log(this.fb.user);
  }

}
