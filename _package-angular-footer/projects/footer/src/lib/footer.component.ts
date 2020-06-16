import { Component, Input } from "@angular/core";

@Component({
  selector: "dfe-footer",
  template: `
  <div class="text-center p-4">Copyright {{year}} - {{name}}</div>`
})
export class FooterComponent {
  @Input() year: string;
  @Input() name: string;
}
