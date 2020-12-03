import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormGroupComponent} from '../form-group/form-group.component';
import {SpinnerComponent} from '../spinner/spinner.component';
import {IfPlayerDirectiveDirective} from '../if-player-directive.directive';
import {IfNoPlayerDirectiveDirective} from '../if-no-player-directive.directive';



@NgModule({
  declarations: [FormGroupComponent, SpinnerComponent, IfPlayerDirectiveDirective, IfNoPlayerDirectiveDirective],
  exports: [
    SpinnerComponent,
    IfPlayerDirectiveDirective,
    IfNoPlayerDirectiveDirective
  ],
  imports: [
    CommonModule
  ]
})
export class FeatureModule { }
