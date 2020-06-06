import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Shell } from '@app/shell/shell.service';
import { MaterialListComponent } from './material-list.component';

const routes: Routes = [
  Shell.childRoutes([
    {
      path: 'materials',
      component: MaterialListComponent,
      data: { title: 'Material list' },
    },
  ]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class MaterialListRoutingModule {}
