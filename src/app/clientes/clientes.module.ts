import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { CrudComponent } from './crud/crud.component';

@NgModule({
  imports: [
    CommonModule,
    ClientesRoutingModule
  ],
  declarations: [CrudComponent]
})
export class ClientesModule { }
