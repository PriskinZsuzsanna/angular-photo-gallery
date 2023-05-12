import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BeachesComponent } from './components/beaches/beaches.component';
import { BeachComponent } from './components/beach/beach.component';

@NgModule({
  declarations: [
    AppComponent,
    BeachesComponent,
    BeachComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
