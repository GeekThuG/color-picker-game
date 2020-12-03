import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PLAYER_ROUTE} from './player.routes';
import {RouterModule} from '@angular/router';
import {SigninComponent} from '../signin/signin.component';
import {SignoutComponent} from '../signout/signout.component';



@NgModule({
  declarations: [SigninComponent, SignoutComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(PLAYER_ROUTE),
  ]
})
export class PlayerModule { }
