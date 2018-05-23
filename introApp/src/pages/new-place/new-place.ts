import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { PlaceProvider } from '../../providers/place/place';

@IonicPage()
@Component({
  selector: 'page-new-place',
  templateUrl: 'new-place.html',
})
export class NewPlacePage {
  place: string = '';

  constructor(
    public navCtrl: NavController,
    private placeProvider: PlaceProvider
  ) {}

  savePlace(f) {
    console.log(this.placeProvider.addPlace(f.value.place));
  }
}
