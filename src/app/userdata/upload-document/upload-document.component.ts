import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-document',
  templateUrl: './upload-document.component.html',
  styleUrls: ['./upload-document.component.css']
})
export class UploadDocumentComponent implements OnInit {
arrayofFiles=[]
fileData:File
  constructor() { }

  ngOnInit() {
  }

  uploadFile(event){
    console.log(event.target.files.length)
for(var i=0; i< event.target.files.length; i++){
this.arrayofFiles.push(event.target.files[i])
alert("aaa")
console.log(this.arrayofFiles[i].name)
}
  }
  uploadSingleFile(files: FileList){
    this.fileData = files.item(0)

  }
}
