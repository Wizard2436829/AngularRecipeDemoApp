import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit{

  ngOnInit(){
    console.log("Holy shit it hit the breakpoint !! ");
  }

  FeatureSelectedProperty:string;

  FeatureSelectedMethod(feature:string){
    this.FeatureSelectedProperty = feature;
  }
  
}
