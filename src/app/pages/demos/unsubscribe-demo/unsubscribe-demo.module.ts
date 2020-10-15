import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnsubscribeDemoRoutingModule } from './unsubscribe-demo-routing.module';
import { UnsubscribeDemoComponent } from './unsubscribe-demo.component';


@NgModule({
  declarations: [UnsubscribeDemoComponent],
  imports: [
    CommonModule,
    UnsubscribeDemoRoutingModule
  ]
})
export class UnsubscribeDemoModule { }
