import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Pagina3Page } from '../pagina3/pagina3';
import { Page } from '../../../node_modules/ionic-angular/umd/navigation/nav-util';

/**
 * Generated class for the Pagina2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pagina2',
  templateUrl: 'pagina2.html',
})
export class Pagina2Page {

  public mutantes: any[] = [
    { nombre: 'Magneto', poder: 'Controlar metales'},
    { nombre: 'Wolverine', poder: 'Regeneracion'},
    { nombre: 'Profesor X', poder: 'Control Mental'},
    { nombre: 'Gambito', poder: 'Cargar energia a objetos'},
  ];

  pagina3: Page = Pagina3Page;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Pagina2Page');
  }

  irPagina3(mutante: any){
    this.navCtrl.push( Pagina3Page, { 'mutante': mutante } );
  }
}
