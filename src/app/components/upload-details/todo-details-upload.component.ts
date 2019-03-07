import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'todo-details-upload',
  templateUrl: './todo-details-upload.component.html',
})

export class TodoDetailsUploadComponent implements OnInit {

    @Input() fileUpload: string;

    constructor() {}

    ngOnInit() {
    }
}
