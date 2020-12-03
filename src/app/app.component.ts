import { Component, OnInit } from '@angular/core';
import {PlayerService} from './player/player.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'color-picker-game';

  isSignin = false;
  email = '';

  constructor(private playerService: PlayerService) {
  }
  ngOnInit(): void {
    this.playerService.player$.subscribe(player => {
      if (player){
        this.isSignin = true;
        this.email = player.email;
      }});
  }

}
