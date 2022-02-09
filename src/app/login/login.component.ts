import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-ui',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private router: Router) {}

  public navigate() {
    this.router.navigate(['/home']);
  }
}
