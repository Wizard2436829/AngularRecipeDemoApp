import { Injectable } from "@angular/core";

@Injectable({
    providedIn:"root"
})

export class counterService{

    counterConsolePrint(outputString:string){
        console.log(outputString);
    }

}