import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutosRoutingModule } from './produtos-routing.module';
import { CrudComponent } from './crud/crud.component';

@NgModule({
  imports: [
    CommonModule,
    ProdutosRoutingModule
  ],
  declarations: [CrudComponent]
})
export class ProdutosModule { }
