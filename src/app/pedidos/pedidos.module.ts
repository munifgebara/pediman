import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PedidosRoutingModule } from './pedidos-routing.module';
import { CrudComponent } from './crud/crud.component';

@NgModule({
  imports: [
    CommonModule,
    PedidosRoutingModule
  ],
  declarations: [CrudComponent]
})
export class PedidosModule { }
