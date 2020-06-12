import { Component, OnInit } from "@angular/core";
import { state } from "cfryerdev-dfe-utility-cookiestate";

@Component({
  selector: "app-root",
  templateUrl: "./root.component.html"
})
export class RootComponent implements OnInit {
  username = undefined;
  userState = undefined;
  usernameFormat = this.username !== undefined ? `Logged in: ${this.username}` : 'Not logged in.';

  links = [
    { name: "Home", url: "http://www.cfryerdev-mfe.info/" },
    { name: (this.userState !== undefined ? "Logout" : "Login"), url: "http://login.cfryerdev-mfe.info/" }, 
    { name: "About", url: "http://about.cfryerdev-mfe.info/" }, 
    { name: "Products", url: "http://products.cfryerdev-mfe.info/" }
  ];

  ngOnInit() { 
    const id = state.getId("DFE-EXAMPLE");
    this.userState = state.getStateElement(id, "user");
    if (this.userState !== undefined) {
      this.username = this.userState.username;
    }
  }
}
