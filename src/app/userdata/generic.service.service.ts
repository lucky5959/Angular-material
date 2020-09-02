import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpEvent ,HttpRequest} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class Generic {
  documentVersionId: any;
  levelId: string | Blob;
  levelKey: string | Blob;
  loggedInUser: string | Blob;
  urlService: any;

  constructor(private http: HttpClient) { }
  pushFileToStorage(file: File): Observable<HttpEvent<{}>> {
    const formdata: FormData = new FormData();
    formdata.append('file', file);
    formdata.append('levelId', this.levelId);
    formdata.append('levelKey', this.levelKey);
    formdata.append('LoggedInUser', this.loggedInUser);
    const req = new HttpRequest('POST', this.urlService + '/CMMService-service/UploadFileAsAttachment', formdata, {
        reportProgress: true,
        responseType: 'text'
    }
    );
    return this.http.request(req);
}

public DownloadFile(filePath: string): Observable<any> {
  return this.http
       .get(this.urlService + '/CMMService-service/DownloadFile?filePath=' + filePath, {
           responseType: 'blob'
       });
}
}
