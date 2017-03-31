import { Component, Input, Output, EventEmitter }  from '@angular/core';
import { Meal }                                    from './meal';


@Component({
  selector: 'display-log',
  templateUrl: '../app/views/display-log.html',
  styles: [`

    `]
})

export class DisplayLogComponent {
  @Input() mealLog: Meal[];
  @Output() sendEditMeal = new EventEmitter();

  editThisMeal: Meal;

  editMeal(editMeal: Meal) {
    this.editThisMeal = editMeal;
    this.sendEditMeal.emit(this.editThisMeal);
  }

}
