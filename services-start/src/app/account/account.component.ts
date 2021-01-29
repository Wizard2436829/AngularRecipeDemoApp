import { Component, EventEmitter, Input, Output } from '@angular/core';
import {loggingService} from '../services/logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers:[loggingService]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;
  @Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();

  constructor(private varloggingService:loggingService){}


  onSetTo(status: string) {
    this.statusChanged.emit({id: this.id, newStatus: status});
    this.varloggingService.logToConsole('The status has changed to' + status);
  }
}
