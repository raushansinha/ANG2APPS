
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

//We have two directive with same name, so using alias for one of them
import { HighlightDirective as ContactHighlightDirective } from './contact/highlight.directive';
import { ContactComponent } from './contact/contact.component';
import { ContactService } from './contact/contact.service';

import { HighlightDirective } from './highlight.directive';
import { TitleComponent } from './title.component';
import { UserService } from './user.service';

 
@NgModule({
  imports: [
    BrowserModule, 
    FormsModule
  ],
  declarations: [
    AppComponent,
    HighlightDirective,
    TitleComponent,

    ContactHighlightDirective,
    ContactComponent

  ],
  bootstrap: [ AppComponent ],
  providers: [
    UserService,
    ContactService
  ] 
})
export class AppModule { }
