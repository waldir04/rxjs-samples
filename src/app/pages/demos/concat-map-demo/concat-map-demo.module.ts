import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConcatMapDemoRoutingModule } from './concat-map-demo-routing.module';
import { ConcatMapDemoComponent } from './concat-map-demo.component';


@NgModule({
  declarations: [ConcatMapDemoComponent],
  imports: [
    CommonModule,
    ConcatMapDemoRoutingModule
  ]
})
export class ConcatMapDemoModule { }
