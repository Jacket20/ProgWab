import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})

export class DetailsPage {
  movie: Object;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.movie = navParams.data;
  }

}




