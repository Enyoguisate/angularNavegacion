import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, Modal } from 'ionic-angular';
import { ModalPage } from '../modal/modal';

/**
 * Generated class for the AjustesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ajustes',
  templateUrl: 'ajustes.html',
})
export class AjustesPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private modalCtrl: ModalController) {
      console.log('this.navCtrl.parent', this.navCtrl.parent);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AjustesPage');
  }

  activarPrincipal(){
    this.navCtrl.parent.select(2);
  }

  mostrarModal(){
    console.log('lala', );
    let modal: Modal = this.modalCtrl.create( ModalPage, { 
      'persona': {
        nombre: 'Victor', 
        edad: 32 
      }
    });
    modal.present();
    modal.onDidDismiss( parametros => {
      if(parametros){
        console.log('parametros', parametros);
      }
    });
  }


}
