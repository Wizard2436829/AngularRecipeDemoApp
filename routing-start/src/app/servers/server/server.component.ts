import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService,private route:ActivatedRoute) { }

  ngOnInit() {
    const serverID = +this.route.snapshot.params['id'];
    this.server = this.serversService.getServer(serverID);

    // below is the code used to subscribe to the params observable.
    this.route.params.subscribe(
      (params:Params) => {
        this.server = this.serversService.getServer(+params.id);
      }
    )

  }

}
