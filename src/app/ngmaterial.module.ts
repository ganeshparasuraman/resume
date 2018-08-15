import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  MatButtonModule,MatIconModule,MatCardModule,MatRippleModule,MatChipsModule  } from '@angular/material';
import {
  MatToolbarModule,
  MatTabsModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatCheckboxModule,
  MatRadioModule,
  MatListModule
} from '@angular/material';


@NgModule({
  imports: [MatButtonModule,MatIconModule,MatCardModule,MatToolbarModule,
    MatTabsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatRadioModule,
    MatListModule,
    MatChipsModule],
  exports: [MatButtonModule,MatIconModule,MatCardModule,MatToolbarModule,
    MatTabsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatRadioModule,
    MatRippleModule,
    MatListModule,
    MatChipsModule ]
})
export class MaterialAppModule { }