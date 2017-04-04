import { Component, OnInit } from '@angular/core';
import {collection} from "../data";
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  public collection = collection;
  constructor() {
   /* for (let i = 1; i <= 100; i++) {
      this.collection.push(`http://lorempixel.com/output/food-q-c-320-240-2.jpg`);
    }*/
  }
  ngOnInit() {
  }

}
