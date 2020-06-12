import { Component, Input, OnInit } from "@angular/core";
import { state } from "cfryerdev-dfe-utility-cookiestate";

@Component({
  selector: "app-root",
  templateUrl: "./root.component.html"
})
export class RootComponent implements OnInit {
  @Input() username: string;
  @Input() usernameFormat: string;
  @Input() links: any[];

  ngOnInit() { 
    const id = state.getId("DFE-EXAMPLE");
    const userState = state.getStateElement(id, "user");
    console.log(this.username)
    if (userState !== undefined) {
      this.username = userState.username;
    }
    this.usernameFormat = this.username !== undefined ? `Logged in: ${this.username}` : 'Not logged in.';

    this.links = [
      { name: "Home", url: "http://www.cfryerdev-mfe.info/" },
      { name: (this.username !== undefined ? "Logout" : "Login"), url: "http://login.cfryerdev-mfe.info/" }, 
      { name: "About", url: "http://about.cfryerdev-mfe.info/" }, 
      { name: "Products", url: "http://products.cfryerdev-mfe.info/" }
    ];

  }
}
