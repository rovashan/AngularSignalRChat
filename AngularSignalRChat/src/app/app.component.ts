import { Component } from '@angular/core';
import { UserService } from './shared/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularSignalRChat';

  constructor(private userService: UserService,
    private router: Router) {}

  isLoggedIn() {
    return this.userService.isLoggedIn;
  }

  logout() {
    this.userService.isLoggedIn = false;
    this.router.navigate(['/login']);
  }
}
