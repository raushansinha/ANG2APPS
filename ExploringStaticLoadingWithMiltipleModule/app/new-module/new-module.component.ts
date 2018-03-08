import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'new-module-component',
  //template: `     <h1>{{ message }}</h1>   `
  templateUrl: `./new-module.component.html`
})
export class NewModuleComponent {
  message = 'New Module!';
}
