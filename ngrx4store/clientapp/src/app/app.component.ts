import { Component } from '@angular/core';
import { Router, Params } from "@angular/router";
import { Store } from "@ngrx/store";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NGRX4 State Management';
}
