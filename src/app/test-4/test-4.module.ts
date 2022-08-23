import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Test4RoutingModule } from './test-4-routing.module';
import { Comp3Component } from './comp3/comp3.component';
import { Comp4Component } from './comp4/comp4.component';


@NgModule({
  declarations: [
    Comp3Component,
    Comp4Component
  ],
  imports: [
    CommonModule,
    Test4RoutingModule
  ]
})
export class Test4Module { }
