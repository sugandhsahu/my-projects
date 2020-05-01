import { NgModule } from '@angular/core';
import { FabDropdownComponent } from './fab-dropdown.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { BrowserModule } from '@angular/platform-browser';
import { FabSingleDropdownComponent } from './components/fab-single-dropdown/fab-single-dropdown.component';
import { FabMultiDropdownComponent } from './components/fab-multi-dropdown/fab-multi-dropdown.component';

@NgModule({
  declarations: [FabDropdownComponent, FabSingleDropdownComponent, FabMultiDropdownComponent],
  imports: [
    ScrollingModule,
    BrowserModule
  ],
  exports: [FabDropdownComponent]
})
export class FabDropdownModule { }
