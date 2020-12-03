import { Component, OnInit } from '@angular/core';
import {PlayerService} from '../player/player.service';
import {Router} from '@angular/router';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-signout',
  templateUrl: './signout.component.html',
  styleUrls: ['./signout.component.css']
})
export class SignoutComponent implements OnInit {
  loading = false;

  constructor(private playerSerive: PlayerService,
              private router: Router) { }

  ngOnInit(): void {
  }

  signout(): void {
    this.loading = true;
    this.playerSerive.signout().pipe(
      tap(this.goToHome.bind(this))
    ).subscribe();
  }
  goToHome(): void {
    this.router.navigateByUrl('/');
  }
}
