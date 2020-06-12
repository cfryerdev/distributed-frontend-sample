import { Component, Input, OnInit } from "@angular/core";
import { state } from "cfryerdev-dfe-utility-cookiestate";

@Component({
  selector: "app-root",
  templateUrl: "./root.component.html"
})
export class RootComponent implements OnInit {
  @Input() username: string;
  @Input() usernameFormat: string;

  links = [
    { name: "Home", url: "http://www.cfryerdev-mfe.info/" },
    { name: (this.username !== '' ? "Logout" : "Login"), url: "http://login.cfryerdev-mfe.info/" }, 
    { name: "About", url: "http://about.cfryerdev-mfe.info/" }, 
    { name: "Products", url: "http://products.cfryerdev-mfe.info/" }
  ];

  ngOnInit() { 
    const id = state.getId("DFE-EXAMPLE");
    const userState = state.getStateElement(id, "user");
    if (userState !== undefined) {
      this.username = userState.username;
    }
    this.usernameFormat = this.username !== undefined ? `Logged in: ${this.username}` : 'Not logged in.';
  }
}
