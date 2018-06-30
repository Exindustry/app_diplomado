import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

/*
  Generated class for the ProveedorSessionProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProveedorSessionProvider {

  constructor(public http: Http) {
    console.log('Hello ProveedorSessionProvider Provider');
  }

  set(name: any, datos: any){
    console.log("al cargar datos");
    console.log(name);
    console.log(datos);
    localStorage.setItem(name,JSON.stringify(datos));
  }

  get(name: any){
    return JSON.parse(localStorage.getItem(name));
  }

  getUsuario(name: any){
    let json = JSON.parse(localStorage.getItem("usu"));
    console.log("al traer los datos");
    console.log(json);
    console.log("al trar los datos - con name");
    console.log(json[name]);
    return json[name];
  }

}
