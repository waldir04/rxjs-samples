import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ZipDemoRoutingModule } from './zip-demo-routing.module';
import { ZipDemoComponent } from './zip-demo.component';


@NgModule({
  declarations: [ZipDemoComponent],
  imports: [
    CommonModule,
    ZipDemoRoutingModule
  ]
})
export class ZipDemoModule { }
