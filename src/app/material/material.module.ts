import { NgModule } from '@angular/core';
import {
  MatInputModule, MatButtonModule, MatSidenavModule, MatToolbarModule, MatIconModule,
  MatListModule, MatCardModule, MatTableModule, MatDatepickerModule, MatNativeDateModule,
} from '@angular/material';

@NgModule({
  imports: [
    MatInputModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatTableModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  exports: [
    MatInputModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatTableModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ]
})
export class MaterialModule { }
