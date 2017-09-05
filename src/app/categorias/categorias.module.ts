import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriasRoutingModule } from './categorias-routing.module';
import { CrudComponent } from './crud/crud.component';

@NgModule({
  imports: [
    CommonModule,
    CategoriasRoutingModule
  ],
  declarations: [CrudComponent]
})
export class CategoriasModule { }
