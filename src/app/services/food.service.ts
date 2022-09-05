import { Injectable } from '@angular/core';
import { Food } from '../interfaces/food.model';

@Injectable({
  providedIn: 'root'
})
export class FoodService { // ce service va permettre de persisiter les aliments
  private _allFood: Food[] = [];

  get allFood() {
    return this._allFood;
  }

  constructor() { }

  addFood(foodItem: Food) {
    this._allFood = [foodItem, ...this._allFood] //spread operator eclate tous ce qu'il y a dans un tableau poure les mettre dans ce new tableau
    console.log(this._allFood);

  }
}
// addFood : quand quelqu'un va utiliser cette instance de service et particulièrement la méthode addFood, on ajoutera le new aliment au tableau

//c'est depuis ce service qu'on accédera à une base de données