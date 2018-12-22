import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Tutorial } from './../models/tutorial.model';
import { AppState } from './../app.state';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  //section 1
  tutorials: Observable<Tutorial[]>;

  //section 2

  constructor(private store: Store<AppState>) {
    this.tutorials = store.select('tutorial');
   }

  ngOnInit() {
  }

}
