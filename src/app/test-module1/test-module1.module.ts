import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Module1Component } from './module1/module1.component';
import { TestModule2Module } from '../test-module2/test-module2.module';



@NgModule({
  declarations: [
    Module1Component
  ],
  imports: [
    CommonModule,
    TestModule2Module
  ],
  exports:[
    Module1Component,
    TestModule2Module
  ]
})
export class TestModule1Module { }
