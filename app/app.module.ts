import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptHttpModule } from 'nativescript-angular/http';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { AppRoutingModule, Components } from "./app.routing";
import { AppComponent } from "./app.component";
import { Database } from './providers/database/database.service';


@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptFormsModule,
        NativeScriptHttpModule
    ],
    declarations: [
        AppComponent,
        ...Components
    ],
    providers: [
        Database
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
