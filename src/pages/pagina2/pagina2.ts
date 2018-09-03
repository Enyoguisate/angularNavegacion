import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Page } from 'ionic-angular/umd/navigation/nav-util';
import { Pagina3Page } from '../pagina3/pagina3';

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

  pagina3: Page = Pagina3Page;

  mutantes: any[] = [
    { nombre: 'Wolverine', poder: 'Regeneracion' },
    { nombre: 'Magneto', poder: 'Control Metal' },
    { nombre: 'Jean Gray', poder: 'Control Mental' },
    { nombre: 'Gambito', poder: 'Cargar objetos de energia' },
    { nombre: 'Profesor X', poder: 'Control Mental' }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Pagina2Page');
  }

  enviarMutante(mutante){
    this.navCtrl.push( this.pagina3, { 'mutante': mutante });
  }

}
