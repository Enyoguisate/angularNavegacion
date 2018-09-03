import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Mutante } from '../../interaces/iMutantes';
import { Page } from 'ionic-angular/umd/navigation/nav-util';
import { PrincipalPage } from '../index.pages';

/**
 * Generated class for the Pagina3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pagina3',
  templateUrl: 'pagina3.html',
})
export class Pagina3Page {
  paginaPrincipal: Page = PrincipalPage;
  mutante: Mutante;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.mutante = this.navParams.get('mutante');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Pagina3Page');
  }

  irAtras(){
    this.navCtrl.pop();
  }

  irRoot(){
    // this.navCtrl.push(this.paginaPrincipal);
    this.navCtrl.popToRoot();
  }

}
