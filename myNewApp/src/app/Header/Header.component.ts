import { Component,EventEmitter,Output } from '@angular/core';

@Component({
    selector: 'app-Header',
    templateUrl: './Header.component.html',
    styleUrls: ['./Header.component.css']
  })

export class HeaderComponent{

  collapsed = true;

  @Output() FeatureSelectedEvent = new EventEmitter<string>();

  FeatureSelected(feature:string){

    this.FeatureSelectedEvent.emit(feature);
  }

}