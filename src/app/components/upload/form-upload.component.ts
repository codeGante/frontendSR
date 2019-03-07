import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {FileUploader} from 'ng2-file-upload';

@Component({
  selector: 'form-upload',
  templateUrl: './form-upload.component.html',
  styleUrls: ['./form-upload.component.css']
})
export class FormUploadComponent implements OnInit {

  @ViewChild('fileInput') fileInput: ElementRef;

  uploader: FileUploader;
  isDropOver: boolean;

  ngOnInit(): void {
    const headers = [{name: 'Accept', value: 'application/json'}];
    this.uploader = new FileUploader({url: 'api/files', autoUpload: true, headers: headers});

    this.uploader.onCompleteAll = () => alert('File uploaded');
  }

  fileOverAnother(e: any): void {
    this.isDropOver = e;
  }

  fileClicked() {
    this.fileInput.nativeElement.click();
  }
}
