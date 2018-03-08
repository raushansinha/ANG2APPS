import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'old-module-component',
  //template: `     <h1>{{ message }}</h1>   `
  templateUrl: `./old-module.component.html`
})
export class OldModuleComponent {
  message = 'Old Module!';
}
