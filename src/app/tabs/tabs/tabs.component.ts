import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent{
  cancion: any[];
  artista: string;

  constructor( private modalController: ModalController,
    private navParams: NavParams) { }

  vistaCancion() {
    console.table(this.navParams);
    this.cancion = this.navParams.data.cancion;
    this.artista = this.navParams.data.artista;
  }
  async selecionCancion(cancion){
    await this.modalController.dismiss(cancion);
  }

}
