import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  image: string|ArrayBuffer|null|undefined=undefined;
  file_data:any=undefined;
  resized_image:string|ArrayBuffer|null|undefined=undefined;
  constructor() { }
  handleFileInput(data: any) {
    let files = data.target.files[0];
    this.file_data=files;
    console.log(files,"fies")
    // console.log(files, "files");
    var reader = new FileReader();
    reader.readAsDataURL(files);
		
		reader.onload = (_event) => {
			//  console.log(reader.result,"res")
       this.image=reader.result;
		}

  }
}
