import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentDemoRoutingModule } from './content-demo-routing.module';
import { ContentDemoComponent } from './content-demo.component';


@NgModule({
  declarations: [ContentDemoComponent],
  imports: [
    CommonModule,
    ContentDemoRoutingModule
  ]
})
export class ContentDemoModule { }
