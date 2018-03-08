import {Component, EventEmitter, OnInit, Output} from '@angular/core';
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
    new Recipe('Apple Pie', 'Awesome treat',
      'https://cbsla.files.wordpress.com/2013/09/apple-pie-thinkstock.jpg')
  ];

  @Output() recipeItemSelected = new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit() {
  }


  onRecipeSelected(recipe: Recipe) {
    this.recipeItemSelected.emit(recipe);
  }
}
