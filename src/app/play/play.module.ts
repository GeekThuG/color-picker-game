import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StartComponent} from '../start/start.component';
import {BoxComponent} from '../box/box.component';
import {RouterModule} from '@angular/router';
import {PLAY_ROUTE} from './play.route';



@NgModule({
  declarations: [StartComponent, BoxComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(PLAY_ROUTE),
  ]
})
export class PlayModule { }
