import { Component, Input, Output, EventEmitter }  from '@angular/core';
import { Meal }                                    from './meal';


@Component({
  selector: 'add-meal',
  templateUrl: '../app/views/add-meal.html',
  styles: [`

    `]
})

export class AddMealComponent {
  @Input() showForm: boolean;
  @Output() newMealSender = new EventEmitter();

  createMeal(newName: string, newDetail: string, newCalories: number) {
    var newMeal: Meal = new Meal(newName, newDetail, newCalories);
    this.newMealSender.emit(newMeal);
  }

}
