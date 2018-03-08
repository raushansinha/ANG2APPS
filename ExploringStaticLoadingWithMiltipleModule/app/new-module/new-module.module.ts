import { NgModule } from '@angular/core';
import { NewModuleComponent } from './new-module.component';

@NgModule({
    declarations: [ NewModuleComponent ],
    exports: [NewModuleComponent]
  })
  export class NewModuleModule {}