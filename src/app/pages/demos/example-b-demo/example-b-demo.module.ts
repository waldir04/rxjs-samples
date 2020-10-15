import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExampleBDemoRoutingModule } from './example-b-demo-routing.module';
import { ExampleBDemoComponent } from './example-b-demo.component';
import { ExampleBDemoService } from './services/example-b-demo.service';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ExampleBDemoComponent],
  imports: [
    CommonModule,
    ExampleBDemoRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    ExampleBDemoService
  ]
})
export class ExampleBDemoModule { }
