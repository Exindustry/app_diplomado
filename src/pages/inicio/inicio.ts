import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProveedorSessionProvider } from '../../providers/proveedor-session/proveedor-session';

/**
 * Generated class for the InicioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name:'inicio',
  segment:'inicio'
})
@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html',
})
export class InicioPage {

  nombre_usuario: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public ses:ProveedorSessionProvider,
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InicioPage');
    this.traeNombreUsu();
  }

  traeNombreUsu(){

    this.nombre_usuario = this.ses.getUsuario("NOMBRE");
    console.log('nombre de usuario ->' + this.nombre_usuario);

  }

}
