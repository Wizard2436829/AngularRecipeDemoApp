import { Component, Input } from '@angular/core';
import { dataService } from '../services/dataService.service';
import {loggingService} from '../services/logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
  //providers:[loggingService]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;
  //@Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();

  constructor(private varloggingService:loggingService,private newDataService:dataService){}


  onSetTo(status: string) {
    this.newDataService.onUpdateStatus(this.id,status);

    //this.statusChanged.emit({id: this.id, newStatus: status});

    //this.varloggingService.logToConsole('The status has changed to : ' + status);
  }
}
