import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MergeMapDemoRoutingModule } from './merge-map-demo-routing.module';
import { MergeMapDemoComponent } from './merge-map-demo.component';


@NgModule({
  declarations: [MergeMapDemoComponent],
  imports: [
    CommonModule,
    MergeMapDemoRoutingModule
  ]
})
export class MergeMapDemoModule { }
