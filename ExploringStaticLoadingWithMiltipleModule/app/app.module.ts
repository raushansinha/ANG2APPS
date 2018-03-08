import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NewModuleModule } from './new-module/new-module.module';
import { OldModuleModule } from './old-module/old-module.module';
import { NewModuleComponent } from './new-module/new-module.component';
import { OldModuleComponent } from './old-module/old-module.component';
import { AppComponent } from './app.component';

@NgModule({
    imports: [ 
      BrowserModule,
      NewModuleModule,
      OldModuleModule
    ],
    declarations: [ AppComponent ],
    providers: [
      NewModuleComponent,
      OldModuleComponent
    ],
    bootstrap: [ AppComponent ]
  })
  export class AppModule {}