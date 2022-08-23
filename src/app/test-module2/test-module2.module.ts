import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Module2Component } from './module2/module2.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    Module2Component
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  exports:[Module2Component]
})
export class TestModule2Module { }
