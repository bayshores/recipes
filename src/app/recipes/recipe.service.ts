import {Recipe} from './recipe.model';
import {EventEmitter} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('Blueberry Muffin',
      'Delicious sweet treat',
      'http://www.onceuponachef.com/images/2014/07/Best-Blueberry-Muffins2-1024x660.jpg',
      [new Ingredient('Blueberries', 20),
      new Ingredient('Butter', 2)]),
    new Recipe('Apple Pie',
      'Awesome treat',
      'https://cbsla.files.wordpress.com/2013/09/apple-pie-thinkstock.jpg',
      [new Ingredient('Apple', 4),
      new Ingredient('Cinnamon', 5)])
  ];

  recipeSelected = new EventEmitter<Recipe>();

  getRecipes() {
    return this.recipes.slice();
  }
}
