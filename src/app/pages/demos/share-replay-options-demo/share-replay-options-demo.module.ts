import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShareReplayOptionsDemoRoutingModule } from './share-replay-options-demo-routing.module';
import { ShareReplayOptionsDemoComponent } from './share-replay-options-demo.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ShareReplayOptionsDemoComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ShareReplayOptionsDemoRoutingModule
  ]
})
export class ShareReplayOptionsDemoModule { }
