import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app.routes";
import { NavigationModule } from "cfryerdev-dfe-angular-navigation";
import { FooterModule } from "cfryerdev-dfe-angular-footer";

import { RootComponent } from "./root/root.component";
import { HomeComponent } from "./home/home.component";
import { NotFoundComponent } from "./not-found/not-found.component";

@NgModule({
  declarations: [RootComponent, HomeComponent, NotFoundComponent],
  imports: [AppRoutingModule, RouterModule, BrowserModule, NavigationModule, FooterModule],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule {}
