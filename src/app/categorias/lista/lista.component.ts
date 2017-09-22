import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../categoria.fb.service'; 
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  lista;

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
    this.categoriaService.delete(obj.$key);
    this.atualiza();
  }

  editar(obj){
    this.router.navigate(['detalhes', obj.$key], { relativeTo: this.route });  }
}
