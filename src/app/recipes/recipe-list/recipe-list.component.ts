import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Blueberry Muffin', 'Delicious sweet treat',
      'http://www.onceuponachef.com/images/2014/07/Best-Blueberry-Muffins2-1024x660.jpg'),
    new Recipe('Blueberry Muffin', 'Delicious sweet treat',
      'http://www.onceuponachef.com/images/2014/07/Best-Blueberry-Muffins2-1024x660.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
