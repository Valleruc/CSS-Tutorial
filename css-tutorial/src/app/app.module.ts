import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Modules/navbar/navbar.component';
import { FlexboxComponent } from './Modules/flexbox/flexbox.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FlexboxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent, NavbarComponent]
})
export class AppModule { }
