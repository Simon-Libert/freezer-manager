import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  allFoodInFreezer = []; // création d'une variable qui récupère au moment de l'initialisation sa valeur depuis le geter créé dans le foodservice


  constructor(private foodService: FoodService) { }

  ngOnInit() { //methode appelée lorsque le component correspondant à cette page est initialisé
    this.allFoodInFreezer = this.foodService.allFood;
    console.log('ngOnInit', this.allFoodInFreezer);

  }

  ionViewWillEnter() { //permet de remettre à jour la tab, donc de récupérer les dernières infos depuis un service
    this.allFoodInFreezer = this.foodService.allFood
    console.log('ionViewWillEnter', this.allFoodInFreezer);
  }

}
