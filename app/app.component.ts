import { Component }  from '@angular/core';
import { Meal }        from './meal';


@Component({
  selector: 'my-app',
  templateUrl: '../app/views/root-app.html',
  styles: [`

    `]
})

export class AppComponent {

  mealLog: Meal[] = [];
  mealCount = 0;
  calorieCount = 0;
  showForm = false;
  mealToEdit: Meal;

  addMeal(newMeal: Meal) {
      this.mealLog.push(newMeal);
      this.mealCount++;
      this.calorieCount += newMeal.calories;
  }

  editMeal(editThisMeal: Meal) {
    this.mealToEdit = editThisMeal;
  }

  showMealForm(): void{
    if(this.showForm == false){
      this.showForm = true;
    } else {
      this.showForm = false;
    }
  }

}
