import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../categoria.service'; 

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  lista=[];

  constructor(private categoriaService:CategoriaService) { }

  ngOnInit() {
    this.atualiza();
  }

  atualiza(){
    this.lista=this.categoriaService.getAll();
  }

  excluir(id){
    console.log('excluindo',id);
    this.categoriaService.delete(id);
    this.atualiza();
    console.log(this.lista);
  }


}
