import { Component, Input, OnInit } from "@angular/core";
import { state } from "cfryerdev-dfe-utility-cookiestate";
import { Link } from "cfryerdev-dfe-angular-navigation";

@Component({
  selector: "app-root",
  templateUrl: "./root.component.html"
})
export class RootComponent implements OnInit {
  @Input() username: string;
  @Input() usernameFormat: string;
  @Input() links: Link[];

  ngOnInit() { 
    const id = state.getId("DFE-EXAMPLE");
    const userState = state.getStateElement(id, "user");
    if (userState !== undefined) {
      this.username = userState.username;
    }
    this.usernameFormat = this.username !== undefined ? `Logged in: ${this.username}` : 'Not logged in.';
    this.links = [
      new Link("http://www.cfryerdev-mfe.info/", "Home"),
      new Link("http://www.cfryerdev-mfe.info/", (this.username !== undefined ? "Logout" : "Login")),
      new Link("http://about.cfryerdev-mfe.info/", "About"),
      new Link("http://products.cfryerdev-mfe.info/", "Products")
    ];
  }
}
