import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from "@ngrx/effects";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule } from "@ngrx/router-store";
import { DepartmentsModule } from './department-feature/departments.module';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'app' },
  {
    path: 'departments',
    loadChildren: './department-feature/departments.module#DepartmentsModule'
  }
]

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot({ "initialState": "This is applications intitial state" }),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule,
    StoreDevtoolsModule.instrument({ maxAge: 50 }),
  ],
  exports: [RouterModule, StoreModule, EffectsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
