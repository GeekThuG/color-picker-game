import {Directive, HostBinding, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {Player} from './player/models/player';
import {PlayerService} from './player/player.service';

@Directive({
  selector: '[appIfNoPlayerDirective]'
})
export class IfNoPlayerDirectiveDirective implements OnInit, OnDestroy {

  playerSub: Subscription = new Subscription();
  @HostBinding('class') dNone = '';
  player: Player;

  constructor(private playerService: PlayerService) { }

  protected check(player: Player | null): void {
    this.playerSub = this.playerService.player$.subscribe(playerData =>
    {
      if (playerData){
        this.dNone = 'd-none';
      }});
  }
  ngOnDestroy(): void {
    this.playerSub.unsubscribe();
  }
  ngOnInit(): void {
    this.player = this.playerService.player;
    this.check(this.player);
  }

}
