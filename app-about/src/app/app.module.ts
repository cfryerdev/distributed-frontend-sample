import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app.routes";

import { RootComponent } from "./root/root.component";
import { HomeComponent } from "./home/home.component";
import { NotFoundComponent } from "./not-found/not-found.component";

@NgModule({
  declarations: [RootComponent, HomeComponent, NotFoundComponent],
  imports: [AppRoutingModule, RouterModule, BrowserModule],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule {}
