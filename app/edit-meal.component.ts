import { Component, Input }  from '@angular/core';
import { Meal }                                    from './meal';


@Component({
  selector: 'edit-meal',
  templateUrl: '../app/views/edit-meal.html',
  styles: [`

    `]
})

export class EditMealComponent {
  @Input() targetMeal: Meal;
  @Input() showEdit: boolean;

}
