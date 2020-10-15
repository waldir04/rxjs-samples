import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExampleADemoRoutingModule } from './example-a-demo-routing.module';
import { ExampleADemoComponent } from './example-a-demo.component';
import { ExampleADemoService } from './services/example-a-demo.service';


@NgModule({
  declarations: [ExampleADemoComponent],
  imports: [
    CommonModule,
    ExampleADemoRoutingModule
  ],
  providers: [
    ExampleADemoService
  ]
})
export class ExampleADemoModule { }
