import { Component, Input } from "@angular/core";
import { Link } from "./navigation.link.model";

@Component({
  selector: "dfe-navigation",
  template: `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <span class="navbar-brand" >
          {{ title }}
      </span>
      <div class="float-right text-right" >
          <a *ngFor="let link of links" class="pr-4" href="{{link.url}}">{{link.name}}</a>
      </div>
    </nav>
    <div class="bg-secondary p-2">
        {{ subtext }}
    </div>`
})
export class NavigationComponent {
  @Input() title: string;
  @Input() subtext: string;
  @Input() links: Link[];
}
