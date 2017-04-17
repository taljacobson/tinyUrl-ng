import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";
import { LinksComponent } from './components/links/links.component';

export const Components = [
    LinksComponent
]

const routes: Routes = [
    { path: "", redirectTo: "/links", pathMatch: "full" },
    { path: "links", component: LinksComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }



