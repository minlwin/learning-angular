import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './sign-in.component.html',
  styleUrls: [
    'sign-in.component.css'
  ]
})
export class SignInComponent implements OnInit {

  signUp = false

  constructor() { }

  ngOnInit(): void {
  }

}
