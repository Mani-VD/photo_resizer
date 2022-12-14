import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataService } from './data.service';
import { PhotoappComponent } from './photoapp/photoapp.component';
import { PhotoheaderComponent } from './photoheader/photoheader.component';
import { PhotofooterComponent } from './photofooter/photofooter.component';
import { FormsModule } from '@angular/forms';
import {MatGridListModule} from '@angular/material/grid-list';
import { DropzoneDirective } from './photodropzone.directive';

@NgModule({
  declarations: [
    AppComponent,
    PhotoappComponent,
    PhotoheaderComponent,
    PhotofooterComponent,
    DropzoneDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatGridListModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
