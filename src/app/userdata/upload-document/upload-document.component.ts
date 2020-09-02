import { Component, OnInit } from '@angular/core';
import { Generic } from '../generic.service.service';
import { HttpClient, HttpEvent ,HttpRequest, HttpResponse} from '@angular/common/http';
@Component({
  selector: 'app-upload-document',
  templateUrl: './upload-document.component.html',
  styleUrls: ['./upload-document.component.css']
})
export class UploadDocumentComponent implements OnInit {
  arrayofFiles = []
  fileData: File
  selectedFiles: any;
  currentFileUpload: any;
  myInputVariable: any;

  constructor(public generic:Generic,
    private http: HttpClient) { }

  ngOnInit() {
  }
  selectFile(event: any) {
    this.selectedFiles = event.target.files;
    
}
uploadFile() {
  this.currentFileUpload = this.selectedFiles.item(0);
  alert(this.currentFileUpload)
  this.generic.pushFileToStorage(this.currentFileUpload).subscribe(event => {
      if (event instanceof HttpResponse) {
         alert('File Uploaded Successfully');
          this.myInputVariable.nativeElement.value = "";
      }
  });
  this.selectedFiles = undefined;
}

DownloadFile(filePath: string, filename: string) {
  this.generic.DownloadFile(filePath).subscribe(res => {
      //console.log('start download:', res);
      var url = window.URL.createObjectURL(res);
      var a = document.createElement('a');
      document.body.appendChild(a);
      a.setAttribute('style', 'display: none');
      a.href = url;
      res.filename = filename;
      a.download = res.filename;
      a.click();
      window.URL.revokeObjectURL(url);
      a.remove(); // remove the element
  }, error => {
      console.log('download error:', JSON.stringify(error));
  }, () => {
      console.log('Completed file download.')
  });
}
  // uploadFile(event) {
  //   console.log(event)
  //   for (var i = 0; i < event.target.files.length; i++) {
  //     this.arrayofFiles.push(event.target.files[i])
  //   }
  // }
  uploadSingleFile(files: FileList) {
    this.fileData = files.item(0)

  }
  // downloadFile(data: Response) {
  //   const blob = new Blob([data], { type: 'text/csv' });
  //   const url= window.URL.createObjectURL(blob);
  //   window.open(url);
  // }
}
