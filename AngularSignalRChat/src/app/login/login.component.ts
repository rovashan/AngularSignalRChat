import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username = '';

  constructor(private userService: UserService,
              private router: Router,
              private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.userService.isLoggedIn = false;
  }

  login() {
    let name = this.username.trim();
    if (name.length < 1) {
      this.snackBar.open('Please enter a username', 'Ok', { duration: 1500} );
      return;
    }
    this.userService.isLoggedIn = true;
    this.userService.username = name;
    this.router.navigate(['/chat']);
  }

}
