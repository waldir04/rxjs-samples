import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RetryWhenDemoRoutingModule } from './retry-when-demo-routing.module';
import { RetryWhenDemoComponent } from './retry-when-demo.component';


@NgModule({
  declarations: [RetryWhenDemoComponent],
  imports: [
    CommonModule,
    RetryWhenDemoRoutingModule
  ]
})
export class RetryWhenDemoModule { }
