import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AccordionModule,GrowlModule, DataListModule} from 'primeng/primeng';     //accordion and accordion tab
import { ToolbarModule,ButtonModule,SplitButtonModule} from 'primeng/primeng';

import { AppRoutingModule } from './app-routing.module';

import { CategoriasModule } from './categorias/categorias.module';
import { ProdutosModule } from './produtos/produtos.module';

import { AppComponent } from './app.component';
import { PanelModule } from "primeng/components/panel/panel";
import { InicialComponent } from './inicial/inicial.component';

import { CategoriaService } from './categorias/categoria.service'; 
import { ProdutoService } from "./produtos/produto.service";


@NgModule({
  declarations: [
    AppComponent,
    InicialComponent
  ],
  imports: [
    BrowserModule,
    CategoriasModule,
    ProdutosModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    AccordionModule,GrowlModule,DataListModule,ToolbarModule,ButtonModule,SplitButtonModule,PanelModule
  ],
  providers: [CategoriaService,ProdutoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
