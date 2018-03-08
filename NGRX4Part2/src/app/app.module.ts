import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// import { RouterModule, Routes } from '@angular/router';
// import { DepartmentModule } from './department/department.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from "@ngrx/effects";
import { RouterEffects } from "./effects/router";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    //DepartmentModule,
    //RouterModule.forRoot(routes),
    //StoreModule.forRoot(RootReducers),
    EffectsModule.forRoot([
      RouterEffects
    ]),
    StoreDevtoolsModule.instrument({maxAge: 50}),
  ],
  exports: [RouterModule, StoreModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
