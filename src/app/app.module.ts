import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataService } from './data.service';
import { PhotoappComponent } from './photoapp/photoapp.component';
import { PhotoheaderComponent } from './photoheader/photoheader.component';
import { PhotofooterComponent } from './photofooter/photofooter.component';

@NgModule({
  declarations: [
    AppComponent,
    PhotoappComponent,
    PhotoheaderComponent,
    PhotofooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
