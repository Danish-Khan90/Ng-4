import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlh3cXBh7G2EkN4Jx1agr4_oo3Qjpb9_fhxQ&usqp=CAU'),
    new Recipe('A Test Recipe', 'This is simply a test', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlh3cXBh7G2EkN4Jx1agr4_oo3Qjpb9_fhxQ&usqp=CAU')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
