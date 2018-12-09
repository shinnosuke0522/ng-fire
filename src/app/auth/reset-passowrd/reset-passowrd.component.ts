import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-reset-passowrd',
  templateUrl: './reset-passowrd.component.html',
  styleUrls: ['./reset-passowrd.component.css','../auth.style.css']
})
export class ResetPassowrdComponent implements OnInit {
  email:string;

  constructor(private auth:AuthService,
              private router:Router) { }

  ngOnInit() {
  }

  resetPassword(email:string){
    return this.auth.resetPassword(email);
  }
}
