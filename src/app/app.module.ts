import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WarningButtonComponent } from './buttons/warning-button/warning-button.component';
import { DangerButtonComponent } from './buttons/danger-button/danger-button.component';
import { SuccessButtonComponent } from './buttons/success-button/success-button.component';

@NgModule({
  declarations: [
    AppComponent,
    WarningButtonComponent,
    DangerButtonComponent,
    SuccessButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
