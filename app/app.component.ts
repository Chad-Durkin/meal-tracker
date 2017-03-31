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
  mealToEdit: Meal;
  newCalorie: number;
  showForm = false;
  showHigh = false;
  mealCount = 0;
  calorieCount = 0;

  addMeal(newMeal: Meal) {
      this.mealLog.push(newMeal);
      this.mealCount++;
      this.calorieCount += parseInt((newMeal.calories).toString());
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

  showHighCal(): void{
    if(this.showHigh == false){
      this.showHigh = true;
      if(this.showForm == true) {
        this.showForm = false;
      }
    } else {
      this.showHigh = false;
    }
  }

}
