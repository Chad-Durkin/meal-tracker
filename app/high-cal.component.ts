import { Component, Input, Output, EventEmitter }  from '@angular/core';
import { Meal }              from './meal';


@Component({
  selector: 'high-cal',
  templateUrl: '../app/views/high-cal.html',
  styles: [`

    `]
})

export class HighCalComponent {
  @Input() mealLog: Meal[];
  @Input() showHigh: boolean;
  @Output() sendEditMeal = new EventEmitter();

  editThisMeal: Meal;

  sortMealLog(): Meal[] {
    var sortedMeals: Meal[] = [];
    this.mealLog.forEach(function(meal){
      if(meal.calories >= 500) {
        sortedMeals.push(meal);
      }
    })
    return sortedMeals;
  }


  editMeal(editMeal: Meal) {
    this.editThisMeal = editMeal;
    this.sendEditMeal.emit(this.editThisMeal);
  }

}
