import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WarningButtonComponent } from './buttons/warning-button/warning-button.component';

@NgModule({
  declarations: [
    AppComponent,
    WarningButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
