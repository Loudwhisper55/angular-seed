import { RouterModule, Routes } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";

import { HomeComponent } from "./route/home/home.component";
import { BaconComponent } from "./route/bacon/bacon.component";

const APP_ROUTES: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "bacon",
        component: BaconComponent
    }
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);