import { 
  MatButtonModule, MatIconModule, MatInputModule, 
  MatSelectModule, MatSliderModule, MatToolbarModule, 
  MatCardModule, MatSlideToggleModule, MatSnackBarModule, MatCheckboxModule, MatSidenavModule } from '@angular/material';

import { NgModule } from '@angular/core';


@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatButtonModule, MatIconModule, MatInputModule, 
    MatSelectModule, MatSliderModule, MatToolbarModule, 
    MatCardModule, MatSlideToggleModule,
    MatSnackBarModule, MatSidenavModule],
  exports: [MatButtonModule, MatCheckboxModule, MatButtonModule, MatIconModule, MatInputModule, 
    MatSelectModule, MatSliderModule, MatToolbarModule, 
    MatCardModule, MatSlideToggleModule, MatSidenavModule,
    MatSnackBarModule],
})
export class MyOwnCustomMaterialModule { }