import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { FormsModule }          from '@angular/forms';
import { AppComponent }         from './app.component';
import { AddMealComponent }     from './add-meal.component';
import { DisplayLogComponent }  from './display-log.component';
import { EditMealComponent }    from './edit-meal.component';


@NgModule({
  imports:      [ BrowserModule,
                  FormsModule ],
  declarations: [ AppComponent,
                  AddMealComponent,
                  DisplayLogComponent,
                  EditMealComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
