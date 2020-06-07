import { NgModule } from '@angular/core';

import { MaterialListRoutingModule } from './material-list-routing.module';
import { MaterialListComponent } from './material-list.component';
import { SharedModule } from '../@shared/shared.module';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  imports: [
    MaterialListRoutingModule,
    SharedModule,
    MatTableModule,
    MatPaginatorModule,
  ],
  declarations: [MaterialListComponent],
})
export class MaterialListModule {}
