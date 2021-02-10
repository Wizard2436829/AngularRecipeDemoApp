import { Injectable,EventEmitter } from "@angular/core";
import { loggingService } from "./logging.service";

@Injectable()

export class dataService{

    constructor(private newLoggingService:loggingService){}

    accounts = [
        {
          name: 'Master Account',
          status: 'active'
        },
        {
          name: 'Testaccount',
          status: 'inactive'
        },
        {
          name: 'Hidden Account',
          status: 'unknown'
        }
      ];

      statusUpdated = new EventEmitter<string>();

      onAddAccount(newName:string,newStatus:string){
          
        this.accounts.push({
            name:newName,
            status:newStatus
        })
        this.newLoggingService.logToConsole(newName + ' is the new server added.');

      }

      onUpdateStatus(id:number,updStatus:string){
          this.accounts[id].status = updStatus;
          this.newLoggingService.logToConsole('The status just changed to : '+updStatus);
      }


}