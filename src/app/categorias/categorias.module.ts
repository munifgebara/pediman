import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableModule,SharedModule } from 'primeng/primeng';
import { ButtonModule } from 'primeng/primeng';
import { InputTextModule } from 'primeng/primeng';
import { CategoriasRoutingModule } from './categorias-routing.module';
import { CrudComponent } from './crud/crud.component';
import { ListaComponent } from './lista/lista.component';
import { DetalhesComponent } from './detalhes/detalhes.component';
import { FormsModule } from '@angular/forms';
import { PanelModule } from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    CategoriasRoutingModule,
    DataTableModule,SharedModule,ButtonModule,InputTextModule,FormsModule,PanelModule
  ],
  declarations: [CrudComponent, ListaComponent, DetalhesComponent]
})
export class CategoriasModule { }
