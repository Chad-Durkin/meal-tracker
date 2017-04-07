import { Component, Input, Output, EventEmitter }  from '@angular/core';
import { Meal }                                    from './meal';


@Component({
  selector: 'display-log',
  templateUrl: '../app/views/display-log.html',
  styles: [`
      h1 {
        color: white;
      }
      .mealLog {
          padding: 10px;
      }
    `]
})

export class DisplayLogComponent {
  @Input() mealLog: Meal[];
  @Output() sendEditMeal = new EventEmitter();
  @Output() sendHidetMeal = new EventEmitter();
  calorieFilter: string = "all";
  editThisMeal: Meal;
  showEdit: boolean;

  editMeal(editMeal: Meal) {
    this.editThisMeal = editMeal;
    this.sendEditMeal.emit(this.editThisMeal);
  }

  hideMeal() {
    this.showEdit = false;
    this.sendEditMeal.emit(this.showEdit);
  }

  onChange(optionFromMenu) {
    console.log(optionFromMenu);
    this.calorieFilter = optionFromMenu;
  }
}
