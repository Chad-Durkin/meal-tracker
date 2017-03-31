import { Component, Input }  from '@angular/core';
import { Meal }                                    from './meal';


@Component({
  selector: 'display-log',
  templateUrl: '../app/views/display-log.html',
  styles: [`

    `]
})

export class DisplayLogComponent {
  @Input() mealLog: Meal[];
}
