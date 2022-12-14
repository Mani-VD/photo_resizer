import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  image: string | ArrayBuffer | null | undefined = undefined;
  file_data: any = undefined;
  resized_image: string | ArrayBuffer | null | undefined = undefined;
  constructor() { }

  get_data_from_inp(file: File) {
    this.file_data = file;
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (_event) => {
      this.image = reader.result;
    }
  }

  handleFileInput(data: any) {
    let files = data.target.files[0];
    console.log(files, "fies")
    this.get_data_from_inp(files);


  }
}
