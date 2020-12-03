import { Component, OnInit } from '@angular/core';
import {PlayerService} from '../player/player.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  isSignin = false;

  constructor(private playerService: PlayerService) { }

  ngOnInit(): void {
    this.playerService.player$.subscribe(player => {
      if (player){
        this.isSignin = true;
      }});
  }

}
