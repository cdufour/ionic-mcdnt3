import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NewPlacePage } from '../new-place/new-place';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  message: string = "Intro Ionic";

  constructor(public navCtrl: NavController) {}

  testBtn() {
    this.message = "J'ai appuyé sur le bouton";
  }

  goToNewPlace() {
    this.navCtrl.push(NewPlacePage);
  }

}
