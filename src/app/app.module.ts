import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { ROUTING } from "./app.routing";

import { HomeComponent } from "./route/home/home.component";
import { WidgetComponent } from "./route/home/widget/widget.component";
import { BaconComponent } from "./route/bacon/bacon.component";
import { BaconService } from "./route/bacon/bacon.service";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        ROUTING
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        WidgetComponent,
        BaconComponent
    ],
    providers: [
        BaconService
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {}