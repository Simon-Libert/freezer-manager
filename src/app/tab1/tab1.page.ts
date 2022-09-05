import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { FoodService } from '../services/food.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  form: FormGroup; // création d'un membre form à l'extérieur pour pouvoir y accéder depuis plusieurs méthodes

  constructor(private foodService: FoodService) { } //injection de dépendance, on ajoute un accesseur, le non du service et son type

  ngOnInit() {
    this.form = new FormGroup({ //new instance de formGroup, on y passe un objet de config
      foodName: new FormControl(null, {
        validators: [Validators.required]
      }), //un form group peut contenir plusieurs form control
      datePlacedInFreezer: new FormControl(null, {
        validators: [Validators.required]
      })
    })
  }

  add() {
    console.log(this.form);
    this.foodService.addFood(this.form.value)
    this.form.reset();
  }

}
