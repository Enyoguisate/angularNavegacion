import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {
  persona: { nombre: string, edad: number } = { nombre: '', edad: 0};

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl: ViewController
  ) {
    this.persona = this.navParams.get('persona');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
  }

  cerrarConParams(){
    let data = {
      nombre: "Roberto",
      edad: 30,
      coords: {
        lat: 10,
        lng: -10
      }
    };
    this.viewCtrl.dismiss(data);
  }

  cerrarSinParams(){
    this.viewCtrl.dismiss();
  }
}
