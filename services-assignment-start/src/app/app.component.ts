import { Component, OnInit } from '@angular/core';
import { userswapService } from './services/userswapService.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  appActiveUsers:string[] = [];
  appInactiveUsers:string[] = [];

  constructor(private userSwapServiceLocalObj:userswapService){}

  ngOnInit(){
    this.appActiveUsers = this.userSwapServiceLocalObj.activeUsers;
    this.appInactiveUsers = this.userSwapServiceLocalObj.inActiveUsers;
  }

  // onSetToInactive(id: number) {
  //   this.appInactiveUsers.push(this.appActiveUsers[id]);
  //   this.appActiveUsers.splice(id, 1);
  // }

  // onSetToActive(id: number) {
  //   this.appActiveUsers.push(this.appInactiveUsers[id]);
  //   this.appInactiveUsers.splice(id, 1);
  // }

}
