<<<<<<< HEAD
import { Component } from '@angular/core';
import { resolve } from 'path';
import { reject } from 'q';
=======
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';
// tslint:disable-next-line:import-blacklist
import { Subscription } from 'rxjs/Rx';
>>>>>>> d1502abba0c260b6dd111b5f0bd084371833af70

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

<<<<<<< HEAD
  appareils = [
  {
      name: 'Machine à laver',
      status: 'éteint'
    },
    {
      name: 'Télévision',
      status: 'allumé'
    },
    {
      name: 'Ordinateur',
      status: 'éteint'
    }
  ];
=======
  secondes: number;
  counterSubscription: Subscription;
>>>>>>> d1502abba0c260b6dd111b5f0bd084371833af70

  constructor() { }

  ngOnInit() {
    const counter = Observable.interval(1000);
    this.counterSubscription = counter.subscribe(
      (value: number) => this.secondes = value,
      (error: any) => console.log('une erreur a été rencontrée'),
      () => console.log('Obesrvable complétée !')
    );
  }

  ngOnDestroy() {
    this.counterSubscription.unsubscribe();
  }
<<<<<<< HEAD

  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(() => {
      resolve(date);
    }, 2000);
  })


=======
>>>>>>> d1502abba0c260b6dd111b5f0bd084371833af70
}

