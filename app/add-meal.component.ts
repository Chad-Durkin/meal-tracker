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

  createMeal(name: string, detail: string, calories: number) {
    var newMeal: Meal = new Meal(name, detail, calories);
    this.newMealSender.emit(newMeal);
  }

}
