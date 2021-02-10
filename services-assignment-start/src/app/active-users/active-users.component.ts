import { Component, EventEmitter, Input, Output } from '@angular/core';
import { counterService } from '../services/counterService.service';
import { userswapService } from '../services/userswapService.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {
  @Input() users: string[];

  //@Output() userSetToInactive = new EventEmitter<number>();

  constructor(private userSwapServiceLocalObj:userswapService){}

  onSetToInactive(id: number) {
    //this.userSetToInactive.emit(id);
    this.userSwapServiceLocalObj.onInactiveStatus(id);
  }
}
