import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private tempRouter: Router, private authservice: AuthService) { }

  ngOnInit() {
  }

  onbtnClick(id: number) {
    this.tempRouter.navigate(['/servers', id, 'edit'],
      { queryParams: { allowEdit: '1' }, fragment: 'loading' });     // this is an absolute path.
  }

  OnLogin() {
    this.authservice.login();
  }

  OnLogout() {
    this.authservice.logout();

  }

}
