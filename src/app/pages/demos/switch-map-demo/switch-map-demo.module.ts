import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SwitchMapDemoRoutingModule } from './switch-map-demo-routing.module';
import { SwitchMapDemoComponent } from './switch-map-demo.component';


@NgModule({
  declarations: [SwitchMapDemoComponent],
  imports: [
    CommonModule,
    SwitchMapDemoRoutingModule
  ]
})
export class SwitchMapDemoModule { }
