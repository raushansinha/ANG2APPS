import { NgModule } from '@angular/core';
import { OldModuleComponent } from './old-module.component';

@NgModule({
    declarations: [ OldModuleComponent ],
    exports: [OldModuleComponent]
  })
  export class OldModuleModule {}