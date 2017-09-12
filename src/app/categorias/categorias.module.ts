import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriasRoutingModule } from './categorias-routing.module';
import { CrudComponent } from './crud/crud.component';
import { ListaComponent } from './lista/lista.component';
import { DetalhesComponent } from './detalhes/detalhes.component';

@NgModule({
  imports: [
    CommonModule,
    CategoriasRoutingModule
  ],
  declarations: [CrudComponent, ListaComponent, DetalhesComponent]
})
export class CategoriasModule { }
