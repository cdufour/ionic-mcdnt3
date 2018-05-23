import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-new-place',
  templateUrl: 'new-place.html',
})
export class NewPlacePage {
  place: string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  savePlace(f) {
    console.log(f);
  }
}
