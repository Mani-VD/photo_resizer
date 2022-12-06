import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotoappComponent } from './photoapp/photoapp.component';

const routes: Routes = [
  {
    path:"",
    redirectTo:"photoapp",
    pathMatch:"full"
  },
  {
    path:"photoapp",
    component:PhotoappComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
