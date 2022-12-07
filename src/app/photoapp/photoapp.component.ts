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
photoparams={width:0,height:0};
click_file_input(){
  (document.getElementById("file"))?.click();
}
async resize_image(){
  
  console.log("Changes",this.photoparams)
  if([null,0].includes(this.photoparams.height)!=true && [null,0].includes(this.photoparams.width)!=true){
    let img=document.getElementById("image_elem");
    console.log(img,"check")
    let resized=await this.resize_logic(img);
    this.data_service.resized_image=resized;
    console.log(resized,"resized")
  }
}

 async resize_logic(imgToResize:any) {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");

  const originalWidth = imgToResize.width;
  const originalHeight = imgToResize.height;

  const canvasWidth = this.photoparams.width;
  const canvasHeight = this.photoparams.height;

  canvas.width = canvasWidth;
  canvas.height = canvasHeight;

  context?.drawImage(
    imgToResize,
    0,
    0,
    this.photoparams.width,
    this.photoparams.width
  );

let ret=canvas.toDataURL(this.data_service.file_data["type"],1.0).replace("image/png","image/octet-stream");
  return ret;
}
}
