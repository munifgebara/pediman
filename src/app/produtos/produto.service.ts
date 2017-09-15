import { Injectable } from '@angular/core';

@Injectable()
export class ProdutoService {

  lista:any[]=[];
  proximoId=4;

  constructor() { 
    this.inciaLista();
  }

  inciaLista(){
    this.lista.push({id:'p1',nome:'Pipoca',categoria:{id:'c1',nome:'Comidas'}});
    this.lista.push({id:'p2',nome:'Picanha',categoria:{id:'c1',nome:'Comidas'}});
    this.lista.push({id:'p3',nome:'Abacaxi',categoria:{id:'c1',nome:'Comidas'}});
  }

  getAll(){
    let aRetornar=[];
    for (let i=0;i<this.lista.length;i++){
      aRetornar.push(this.lista[i]);
    }
    return aRetornar;
  }

  add(obj){
    obj.id='p'+this.proximoId;
    this.proximoId++;
    this.lista.push(obj);
  }

  update(obj){
    for (let i=0;i<this.lista.length;i++){
      if (this.lista[i].id===obj.id){
        this.lista[i]=obj;
        return obj;
      }
    }
  }

  delete(id){
    for (let i=0;i<this.lista.length;i++){
      if (this.lista[i].id===id){
        let antigo=this.lista[i];
        this.lista.splice(i, 1);
        return antigo;
      }
    }
  }

  getOne(id){
    for (let i=0;i<this.lista.length;i++){
      if (this.lista[i].id===id){
        return this.lista[i];
      }
    }
    return {};
  }
}
