import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppRouteModel } from 'src/app/shared/models/app-route.model';
import { DemosService } from 'src/app/shared/services/demos.service';

@Component({
  selector: 'app-demos',
  templateUrl: './demos.component.html',
  styleUrls: ['./demos.component.scss']
})
export class DemosComponent {
  public currentRoute: AppRouteModel;

  constructor(private router: Router, private demosService: DemosService) {}

  public setRouteConfig(): void {
    const currentPath = this.router.url;

    this.currentRoute = this.demosService.routes
      .find((item) => item.path === currentPath);

    if (!this.currentRoute) {
      this.currentRoute = { label: 'Content', path: '' };
    }
  }

}
