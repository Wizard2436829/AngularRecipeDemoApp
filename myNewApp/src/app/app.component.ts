import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  FeatureSelectedProperty:string;

  FeatureSelectedMethod = function(feature:string){

    this.FeatureSelectedProperty = feature;

  }
  
}
