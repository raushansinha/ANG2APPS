import { Component } from '@angular/core';
import { NewModuleComponent } from "./new-module/new-module.component";
import { OldModuleComponent } from "./old-module/old-module.component";


@Component({
  moduleId: module.id,
  selector: 'app',
  //template: `     <h1>{{ message }}</h1>   `
  templateUrl: `./app.component.html`
})
export class AppComponent {
  message = 'Main Module!';
  loadNew: boolean = false;
}
