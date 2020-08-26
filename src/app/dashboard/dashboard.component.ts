import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }
  //  a= [{"documentID":1600,
  // "documentType":{"documentTypeID":200055,"documentType":"Address Proof","product":"BIL",
  // "constitution":"Private Limited Company","documentGroupType":"KYC",
  // "documentName":"AADHAR CARD","documentGroupID":1,"isGovtID":1,"documentCode":"AADHAR CARD",
  // "isPrintable":1,"isDownloadable":1,"watermarkPath":null,"updatedDate":0,"updatedBy":1,
  // "waterMarkLogo":null,"documentFormats":[{"documentFormatID":97,"allowedFileFormat":"PDF",
  // "maxFileSize":100000.0,"minFileSize":1.0,"maxDPI":12.0,"minDPI":1.0,"colourOptionBit":1,
  // "updatedDate":0,"updatedBy":1,"documentTypeID":200055},{"documentFormatID":98,
  // "allowedFileFormat":"PNG","maxFileSize":100000.0,"minFileSize":1.0,"maxDPI":12.0,
  // "minDPI":1.0,"colourOptionBit":1,"updatedDate":0,"updatedBy":1,"documentTypeID":200055},
  // {"documentFormatID":99,"allowedFileFormat":"JPEG","maxFileSize":100000.0,
  // "minFileSize":1.0,"maxDPI":12.0,"minDPI":1.0,"colourOptionBit":1,"updatedDate":0,
  // "updatedBy":1,"documentTypeID":200055}],"keywordsToSearch":[],"keysConfig":[],
  // "documents":null,"isEntity":0,"fileInputIptional":true},
  ngOnInit() {
  }

}
