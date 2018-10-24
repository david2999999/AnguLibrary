import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WarningButtonComponent } from './buttons/regular-buttons/warning-button/warning-button.component';
import { DangerButtonComponent } from './buttons/regular-buttons/danger-button/danger-button.component';
import { SuccessButtonComponent } from './buttons/regular-buttons/success-button/success-button.component';
import { PrimaryButtonComponent } from './buttons/regular-buttons/primary-button/primary-button.component';
import { MultiOptionButtonComponent } from './buttons/regular-buttons/multi-option-button/multi-option-button.component';
import { GhostButtonRectComponent } from './buttons/ghost-buttons/ghost-button-rect/ghost-button-rect.component';

@NgModule({
  declarations: [
    AppComponent,
    WarningButtonComponent,
    DangerButtonComponent,
    SuccessButtonComponent,
    PrimaryButtonComponent,
    MultiOptionButtonComponent,
    GhostButtonRectComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
