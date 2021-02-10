import { Component, EventEmitter, Input, Output } from '@angular/core';
import { userswapService } from '../services/userswapService.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {  

  @Input() users: string[];
  //@Output() userSetToActive = new EventEmitter<number>();

  constructor(private userSwapServiceLocalObj:userswapService){}

  onSetToActive(id: number) {
    //this.userSetToActive.emit(id);
    this.userSwapServiceLocalObj.onActiveStatus(id);
  }
}
