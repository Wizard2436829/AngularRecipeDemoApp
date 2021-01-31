import { Component, OnInit } from '@angular/core';
import { dataService } from './services/dataService.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  
  accounts : {name : string,status:string}[]=[];

  constructor(private newdataService:dataService){}

  ngOnInit(){
    this.accounts = this.newdataService.accounts;    
  }

  // onAccountAdded(newAccount: {name: string, status: string}) {
  //   this.accounts.push(newAccount);
  // }

  // onStatusChanged(updateInfo: {id: number, newStatus: string}) {
  //   this.accounts[updateInfo.id].status = updateInfo.newStatus;
  // }
}
