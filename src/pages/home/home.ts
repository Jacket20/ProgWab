import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  Results:fakeResult;
  constructor(public navCtrl: NavController) {
    //this.Results = fakeResult;
    this.Results = [];
  }
  items: string[];

  initializeItems() {
    this.items = this.Results.title;
    
  }

  getItems(ev: any) {
    let val = ev.target.value;
    if(val == ''){
      this.Results = [];
    }else{
      this.Results = fakeResult;
    }
  }
}

export interface Result{
  title: string;
  author: string;
  date: string;
  image: string;
}

const fakeResult: Result[] = [
  {title:'La Guerre des étoiles', author:'Geoges Lucas',date:'1977',image:'https://image.tmdb.org/t/p/w600_and_h900_bestv2/yVaQ34IvVDAZAWxScNdeIkaepDq.jpg'},
  {title:'Les 8 Salopards', author:'Quentin Tarantino',date:'2015',image:'https://image.tmdb.org/t/p/w600_and_h900_bestv2/sRq90sQq7S68wWnAk9eBxFAvWVz.jpg'},
  {title:'Django', author:'tarantino',date:'2012',image:'https://image.tmdb.org/t/p/w600_and_h900_bestv2/iWXGPkf8TwRuXecfDs0j3dDBNLA.jpg'}
];
