import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatchErrorDemoRoutingModule } from './catch-error-demo-routing.module';
import { CatchErrorDemoComponent } from './catch-error-demo.component';


@NgModule({
  declarations: [CatchErrorDemoComponent],
  imports: [
    CommonModule,
    CatchErrorDemoRoutingModule
  ]
})
export class CatchErrorDemoModule { }
