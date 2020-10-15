import { Component, OnInit } from '@angular/core';

import { DemosService } from '../../../shared/services/demos.service';
import { AppRouteModel } from '../../../shared/models/app-route.model';

@Component({
  selector: 'app-content-demo',
  templateUrl: './content-demo.component.html',
  styleUrls: ['./content-demo.component.scss']
})
export class ContentDemoComponent implements OnInit {
  public routes: AppRouteModel[];

  constructor(private demosService: DemosService) { }

  ngOnInit(): void {
    this.routes = this.demosService.routes;
  }

}
