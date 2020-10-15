import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RetryDemoRoutingModule } from './retry-demo-routing.module';
import { RetryDemoComponent } from './retry-demo.component';


@NgModule({
  declarations: [RetryDemoComponent],
  imports: [
    CommonModule,
    RetryDemoRoutingModule
  ]
})
export class RetryDemoModule { }
