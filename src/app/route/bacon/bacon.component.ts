import { Component } from "@angular/core";
import { BaconService } from "./bacon.service";

@Component({
    selector: "plum-bacon",
    template: require("./bacon.component.pug"),
    styleUrls: [ "./bacon.component.scss" ]
})
export class BaconComponent {
    
    public constructor(private service: BaconService) {
        this.count = 8;
    }
    
    public getCount(): number {
        return this.service.count;
    }
    
    public get count(): number {
        return this.service.count;
    }
    
    public set count(value: number) {
        this.service.count = value;
    }
    
}