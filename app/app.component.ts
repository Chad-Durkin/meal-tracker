import { Component }  from '@angular/core';
import { Meal }        from './meal';


@Component({
  selector: 'my-app',
  templateUrl: '../app/views/root-app.html',
  styles: [`
    .displayLog {
      background-color: #3A9DB2;
    }

    .mealStats {
      background-color: #CFF7FF;
      text-align: center;
    }
    `]
})

export class AppComponent {

  mealLog: Meal[] = [];
  mealToEdit: Meal;
  newCalorie: number;
  showForm = false;
  showHigh = false;
  showLow = false;
  mealCount = 0;
  calorieCount = 0;
  showEdit = false;

  addMeal(newMeal: Meal) {
      this.mealLog.push(newMeal);
      this.mealCount++;
      this.calorieCount += parseInt((newMeal.calories).toString());
  }

  editMeal(editThisMeal: Meal) {
    this.mealToEdit = editThisMeal;
    this.showEdit = true;
  }

  hideEdit(hideParam: boolean) {
    this.showEdit = hideParam;
  }

  showMealForm(): void{
    if(this.showForm == false){
      this.showForm = true;
      this.showLow = false;
      this.showHigh = false;
    } else {
      this.showForm = false;
      this.showLow = false;
      this.showHigh = false;
    }
  }

  showHighCal(): void{
    if(this.showHigh == false){
      this.showHigh = true;
      this.showForm = false;
      this.showLow = false;
    } else {
      this.showHigh = false;
      this.showForm = false;
      this.showLow = false;
    }
  }

  showLowCal(): void{
    if(this.showLow == false){
      this.showLow = true;
      this.showForm = false;
      this.showHigh = false;
    } else {
      this.showLow = false;
      this.showForm = false;
      this.showHigh = false;
    }
  }

}
