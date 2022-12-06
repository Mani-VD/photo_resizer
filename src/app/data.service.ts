import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  image: string|ArrayBuffer|null|undefined=undefined;
  resized_image:string|ArrayBuffer|null|undefined=undefined;
  constructor() { }
  handleFileInput(data: any) {
    let files = data.target.files[0];
    // console.log(files, "files");
    var reader = new FileReader();
    reader.readAsDataURL(files);
		
		reader.onload = (_event) => {
			//  console.log(reader.result,"res")
       this.image=reader.result;
		}

  }
}
