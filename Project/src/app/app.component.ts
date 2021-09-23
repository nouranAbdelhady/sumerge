import { Component, OnInit } from '@angular/core';
import { AuthService } from './extra/auth-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'project';
  loggedIn=false;

  constructor( private authService: AuthService , private router: Router){
  }

  ngOnInit(): void {}

}