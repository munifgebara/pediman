import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VendedoresRoutingModule } from './vendedores-routing.module';
import { CrudComponent } from './crud/crud.component';

@NgModule({
  imports: [
    CommonModule,
    VendedoresRoutingModule
  ],
  declarations: [CrudComponent]
})
export class VendedoresModule { }
