

import { Component, OnInit } from '@angular/core';
import { SpoonacularService } from '../spoonacular.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: any[] = [];
selectedRecipe: any;

  constructor(public spoonacularService: SpoonacularService) {}

  ngOnInit(): void {
    this.spoonacularService.recipes$.subscribe((recipes: any[]) => {
      this.recipes = recipes.map(recipe => ({ ...recipe, showDetails: false }));
    });
  }

  toggleRecipeDetails(index: number): void {
    this.recipes[index].showDetails = !this.recipes[index].showDetails;
  }
}


