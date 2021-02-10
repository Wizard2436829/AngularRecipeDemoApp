import { Injectable } from "@angular/core";
import { counterService } from "./counterService.service";

@Injectable({
    providedIn:'root'
})

export class userswapService{

activeUsers: string[] = ['Max', 'Anna'];
inActiveUsers:string[] = ['Chris', 'Manu'];

activeCounter:number = 0;
inActiveCounter:number = 0;

constructor(private counterServiceObj:counterService){}

//userStatusUpdateEvent : EventEmitter<>

onActiveStatus(i:number){
    this.activeUsers.push(this.inActiveUsers[i]);
    this.inActiveUsers.splice(i,1);
    this.activeCounter++;
    this.counterServiceObj.counterConsolePrint("Inactive to Active status" + this.activeCounter);

}

onInactiveStatus(i:number){
    this.inActiveUsers.push(this.activeUsers[i]);
    this.activeUsers.splice(i,1);
    this.inActiveCounter++;
    this.counterServiceObj.counterConsolePrint("Active to Inactive status" + this.inActiveCounter);
}

}