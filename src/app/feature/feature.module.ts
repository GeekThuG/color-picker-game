import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormGroupComponent} from '../form-group/form-group.component';
import {SpinnerComponent} from '../spinner/spinner.component';



@NgModule({
  declarations: [FormGroupComponent, SpinnerComponent],
  exports: [
    SpinnerComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FeatureModule { }
