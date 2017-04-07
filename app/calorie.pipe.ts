import {Pipe, PipeTransform} from '@angular/core';
import { Meal } from './meal';

@Pipe({
  name: "calorieAmount",
  pure: false
})


export class CaloriePipe implements PipeTransform {
  transform(input: Meal[], display){

    var output: Meal[] = [];
    for(var i = 0; i < input.length; i++) {
      if(display === "high")
      {
        if(input[i].calories >= 500) {
          output.push(input[i]);
        }
      } else if(display === "low"){
        if(input[i].calories < 500) {
          output.push(input[i]);
        }
      } else if(display === "all"){
        output.push(input[i])
      }
    }

    return output;
  }
}
