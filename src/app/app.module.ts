import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRouters} from './app.routes';

import { AppComponent } from './components/app/app.component';
import { TodoListComponent } from './components/list/todo-list.component';
import { TodoService } from './services/todo.service';

import { TodoDetailsUploadComponent } from './components/upload-details/todo-details-upload.component';
import { FormUploadComponent } from './components/upload/form-upload.component';
import { UploadFileService } from './services/upload-file.service';

import { FileUploadModule } from 'ng2-file-upload';
import { WelcomeComponent } from './components/welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoDetailsUploadComponent,
    FormUploadComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    AppRouters,
    FileUploadModule
  ],
  providers: [TodoService, UploadFileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
