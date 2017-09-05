import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AccordionModule,GrowlModule, DataListModule} from 'primeng/primeng';     //accordion and accordion tab
import { ToolbarModule,ButtonModule,SplitButtonModule} from 'primeng/primeng';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PanelModule } from "primeng/components/panel/panel";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    AccordionModule,GrowlModule,DataListModule,ToolbarModule,ButtonModule,SplitButtonModule,PanelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
