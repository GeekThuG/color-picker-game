import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PlayerService} from '../player/player.service';
import {catchError, tap} from 'rxjs/operators';
import {Router} from '@angular/router';
import {of} from 'rxjs';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  signinRegister: FormGroup;
  authenticationFailed = null;

  constructor(private readonly fb: FormBuilder,
              private playerSerive: PlayerService,
              private readonly router: Router) { }

  ngOnInit(): void {
    const {required, minLength, maxLength, email} =  Validators;
    this.signinRegister = this.fb.group({
      login: ['john@doe', [email, minLength(8), required]],
      passe: ['abcde', [minLength(4), maxLength(8), required]],
    });
  }

  signin(): void {
    this.playerSerive.signin(this.signinRegister.value).pipe(
      tap(() => this.router.navigate(['index'])),
      catchError((error) => {
        return this.authenticationFailed =  error ;
      })
    ).subscribe();
  }
}
