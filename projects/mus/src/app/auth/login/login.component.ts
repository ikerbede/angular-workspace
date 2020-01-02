import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { stringify } from 'querystring';

@Component({
  selector: 'mus-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  name: string;
  password: string;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.name, this.password)
      .subscribe(() => {
        if (this.authService.handId) {
          // Get the redirect URL from our auth service
          // If no redirect has been set, use the default
          const redirect = this.authService.redirectUrl ? this.router.parseUrl(this.authService.redirectUrl) : '/game';

          // Redirect the user
          this.router.navigateByUrl(redirect);
        }
      });
  }

  logout() {
    this.authService.logout();
  }
}
