import { Injectable } from '@angular/core';

@Injectable()
export class CategoriaService {

  lista:any[]=[];
  proximoId=4;

  constructor() { 
    this.inciaLista();
  }

  inciaLista(){
    this.lista.push({id:'c1',nome:'Comidas'});
    this.lista.push({id:'c2',nome:'Bebidas'});
    this.lista.push({id:'c3',nome:'Higient'});
  }

  getAll(){
    let aRetornar=[];
    for (let i=0;i<this.lista.length;i++){
      aRetornar.push(this.lista[i]);
    }
    return aRetornar;
  }

  add(obj){
    obj.id='c'+this.proximoId;
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
    if(id=='new'){
      return {id:'new'};
    }
    for (let i=0;i<this.lista.length;i++){
      if (this.lista[i].id===id){
        return this.lista[i];
      }
    }
    return {};
  }
}
