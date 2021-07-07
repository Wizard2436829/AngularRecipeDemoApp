import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit,OnDestroy {
  user: {id: number, name: string};
subscription_var :Subscription;
  constructor(private Act_route:ActivatedRoute) { }

  ngOnInit() {

    this.user = {
      id:this.Act_route.snapshot.params['id'],
      name:this.Act_route.snapshot.params['name']
    }

    // The below method is linked to Observables & Lecture 134.
    this.subscription_var = this.Act_route.params.subscribe(
      (params:Params) => {
        this.user.id = params['id'];
        this.user.name = params['name'];
      }
    );   
  }

  ngOnDestroy(){
      this.subscription_var.unsubscribe;    // Even though angular destroys that.
  }

}
