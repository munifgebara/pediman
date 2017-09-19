import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../categoria.service'; 
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  lista=[];

  constructor(private categoriaService:CategoriaService,protected router: Router, protected route: ActivatedRoute) { }

  ngOnInit() {
    this.atualiza();
  }

  atualiza(){
    this.lista=this.categoriaService.getAll();
  }

  novo(){
    this.router.navigate(['detalhes', 'new'], { relativeTo: this.route });  
  }

  excluir(obj){
    console.log('excluindo',obj.id);
    this.categoriaService.delete(obj.id);
    this.atualiza();
    console.log(this.lista);
  }
  editar(obj){
    console.log('editando',obj.id);
    this.router.navigate(['detalhes', obj.id], { relativeTo: this.route });  }
}
