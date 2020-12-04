import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {newArray} from '@angular/compiler/src/util';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  gridForm: FormGroup;
  grid: number;
  gridTable: Array<any>;

  constructor(private readonly fb: FormBuilder) { }

  ngOnInit(): void {
    const { min, max} =  Validators;
    this.gridForm = this.fb.group({
      vertical: ['2', [min(2), max(8)]],
      horizontal: ['3', [min(3), max(8)]],
    });
    this.draw();
  }
  draw(): void {
    if (!this.gridForm.invalid) {
      this.grid = null;
    }
    return null;

  }

}
