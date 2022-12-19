import { Component, OnInit } from '@angular/core';
import { LoginReturn } from 'src/app/pages/auth/authentication-interface';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  currentUser: LoginReturn = JSON.parse(localStorage.getItem('currentUser')!);
  constructor() { }

  ngOnInit(): void {
  }

}
