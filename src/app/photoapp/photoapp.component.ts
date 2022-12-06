import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-photoapp',
  templateUrl: './photoapp.component.html',
  styleUrls: ['./photoapp.component.scss']
})
export class PhotoappComponent {
constructor(public data_service:DataService){

}
click_file_input(){
  (document.getElementById("file"))?.click();
}
}
