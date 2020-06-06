import { NgModule } from '@angular/core';

import { MaterialListRoutingModule } from './material-list-routing.module';
import { MaterialListComponent } from './material-list.component';
import { SharedModule } from '../@shared/shared.module';

@NgModule({
  imports: [MaterialListRoutingModule, SharedModule],
  declarations: [MaterialListComponent],
})
export class MaterialListModule {}
