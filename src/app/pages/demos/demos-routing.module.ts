import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemosComponent } from './demos.component';

import { APP_ROUTES } from './../../shared/constants/app-routes.const';

const routes: Routes = [
  {
    path: '',
    component: DemosComponent,
    children: [
      {
        path: APP_ROUTES.DEMOS.CHILDREN.CONTENT,
        loadChildren: () => import('./content-demo/content-demo.module').then(m => m.ContentDemoModule)
      },
      {
        path: APP_ROUTES.DEMOS.CHILDREN.SAMPLE.DEMO_MERGE_MAP,
        loadChildren: () => import('./merge-map-demo/merge-map-demo.module').then(m => m.MergeMapDemoModule)
      },
      {
        path: APP_ROUTES.DEMOS.CHILDREN.SAMPLE.DEMO_CONCAT_MAP,
        loadChildren: () => import('./concat-map-demo/concat-map-demo.module').then(m => m.ConcatMapDemoModule)
      },
      {
        path: APP_ROUTES.DEMOS.CHILDREN.SAMPLE.DEMO_SWITCH_MAP,
        loadChildren: () => import('./switch-map-demo/switch-map-demo.module').then(m => m.SwitchMapDemoModule)
      },
      {
        path: APP_ROUTES.DEMOS.CHILDREN.SAMPLE.DEMO_ZIP,
        loadChildren: () => import('./zip-demo/zip-demo.module').then(m => m.ZipDemoModule)
      },
      {
        path: APP_ROUTES.DEMOS.CHILDREN.SAMPLE.DEMO_CATCH_ERROR,
        loadChildren: () => import('./catch-error-demo/catch-error-demo.module').then(m => m.CatchErrorDemoModule)
      },
      {
        path: APP_ROUTES.DEMOS.CHILDREN.SAMPLE.DEMO_RETRY,
        loadChildren: () => import('./retry-demo/retry-demo.module').then(m => m.RetryDemoModule)
      },
      {
        path: APP_ROUTES.DEMOS.CHILDREN.SAMPLE.DEMO_RETRY_WHEN,
        loadChildren: () => import('./retry-when-demo/retry-when-demo.module').then(m => m.RetryWhenDemoModule)
      },
      {
        path: APP_ROUTES.DEMOS.CHILDREN.SAMPLE.DEMO_SHARE_REPLAY,
        loadChildren: () => import('./share-replay-demo/share-replay-demo.module').then(m => m.ShareReplayDemoModule)
      },
      {
        path: APP_ROUTES.DEMOS.CHILDREN.SAMPLE.DEMO_SHARE_REPLAY_OPTIONS,
        loadChildren: () => import('./share-replay-options-demo/share-replay-options-demo.module').then(m => m.ShareReplayOptionsDemoModule)
      },
      {
        path: APP_ROUTES.DEMOS.CHILDREN.SAMPLE.DEMO_UNSUBSCRIBE,
        loadChildren: () => import('./unsubscribe-demo/unsubscribe-demo.module').then(m => m.UnsubscribeDemoModule)
      },
      {
        path: APP_ROUTES.DEMOS.CHILDREN.SAMPLE.DEMO_EXAMPLE_A,
        loadChildren: () => import('./example-a-demo/example-a-demo.module').then(m => m.ExampleADemoModule)
      },
      {
        path: APP_ROUTES.DEMOS.CHILDREN.SAMPLE.DEMO_EXAMPLE_B,
        loadChildren: () => import('./example-b-demo/example-b-demo.module').then(m => m.ExampleBDemoModule)
      },
      {
        path: '**',
        redirectTo: APP_ROUTES.DEMOS.CHILDREN.CONTENT
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemosRoutingModule { }
