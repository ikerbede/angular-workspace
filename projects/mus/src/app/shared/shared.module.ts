import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FloorPipe } from './floor.pipe';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    FloorPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    MaterialModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    FloorPipe
  ]
})
export class SharedModule { }
