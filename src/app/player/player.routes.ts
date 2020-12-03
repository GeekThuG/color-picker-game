import {Routes} from '@angular/router';
import {SigninComponent} from '../signin/signin.component';
import {SignoutComponent} from '../signout/signout.component';


export const PLAYER_ROUTE: Routes = [
  { path: 'signin',  component: SigninComponent },
  { path: 'signout', component: SignoutComponent }
];
