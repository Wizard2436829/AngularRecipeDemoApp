import { Component } from '@angular/core';
import { dataService } from '../services/dataService.service';
import {loggingService} from '../services/logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
  //providers:[loggingService]
})
export class NewAccountComponent {
  //@Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  constructor(private varloggingService:loggingService,private newDataService:dataService){}

  onCreateAccount(accountName: string, accountStatus: string) {

    this.newDataService.onAddAccount(accountName,accountStatus);

    // this.accountAdded.emit({
    //   name: accountName,
    //   status: accountStatus
    // });

    //this.varloggingService.logToConsole('A server status changed, new status: ' + accountStatus);


    // The code below is not the way how we use services in angular.
    // const lgSOBJ = new loggingService();
    // lgSOBJ.logToConsole(accountStatus);
    //console.log('A server status changed, new status: ' + accountStatus);
  }
}
