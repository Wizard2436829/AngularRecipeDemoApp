import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { ServersService } from '../servers.service';
import { CanComponentDeactivate } from './can-deactivate-guard.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit,CanComponentDeactivate {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  allowEdit = false;
  changesSaved =false;

  constructor(private serversService: ServersService,private Act_route_var:ActivatedRoute) { }

  ngOnInit() {

    //console.log(this.Act_route_var.snapshot.queryParams);
    //console.log(this.Act_route_var.snapshot.fragment);

    this.Act_route_var.queryParams.subscribe(
      (queryParams:Params)=>{
        this.allowEdit = queryParams['allowEdit']==='1'?true:false;
      }
    );

    this.Act_route_var.fragment.subscribe();

    this.server = this.serversService.getServer(1);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
  }


  canDeactivate():Observable<boolean>|Promise<boolean>|boolean{

    if(!this.allowEdit){
      return true;
    }

    if((this.serverName !== this.server.name || this.serverStatus!== this.server.status) && !this.changesSaved){
      return confirm('Do ya ass wanna do dis or not !!');
    }
    else{
      return true;
    }

  }

}
