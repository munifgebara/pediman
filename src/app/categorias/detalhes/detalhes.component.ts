import { Component, OnInit } from '@angular/core';


import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { CategoriaService } from "../categoria.fb.service";

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent implements OnInit {

  selecionado={};

  constructor(private categoriaService: CategoriaService, protected router: Router, protected route: ActivatedRoute) {

  }
  ngOnInit() {
    let id=this.route.snapshot.params.id;
    console.log(id);
    this.categoriaService.getOne(id).then(r=>this.selecionado=r);
  }

  cancelar() {
    this.router.navigate(['../..'], { relativeTo: this.route });
  }
  
  salvar() {
    if (this.selecionado['novo']) {
      this.categoriaService.add(this.selecionado);
    }
    else {
      this.categoriaService.update(this.selecionado);
    }
    this.router.navigate(['../..'], { relativeTo: this.route });
  }


}
