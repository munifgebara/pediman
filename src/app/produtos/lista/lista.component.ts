import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../produto.service';


@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  lista=[];
  
    constructor(private produtoService:ProdutoService) { }
  
    ngOnInit() {
      this.atualiza();
    }
  
    atualiza(){
      this.lista=this.produtoService.getAll();
    }
  
    excluir(id){
      console.log('excluindo',id);
      this.produtoService.delete(id);
      this.atualiza();
      console.log(this.lista);
    }
}
