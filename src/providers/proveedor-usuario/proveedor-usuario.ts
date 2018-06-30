import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
/*
  Generated class for the ProveedorUsuarioProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProveedorUsuarioProvider {

  private urlLogin: string = "http://localhost:80/login_user_oracle_get.php";

  constructor(public http:Http) {
    console.log('Hello ProveedorUsuarioProvider Provider');
  }

  login(usuario: string, password: string) {  
    return this.http.get(this.urlLogin, { 
      params: { 
        codigo_usuario: usuario, 
        clave_usuario: password 
      } 
    }).map(res => res.json());
  }
}