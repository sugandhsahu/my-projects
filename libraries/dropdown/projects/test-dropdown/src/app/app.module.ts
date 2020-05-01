import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FabDropdownModule } from 'dist/fab-dropdown';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FabDropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
