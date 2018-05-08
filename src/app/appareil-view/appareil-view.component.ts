import { Component, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';
import { Authservice } from '../services/auth.service';
// tslint:disable-next-line:import-blacklist
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {

  isAuth: boolean;
  appareils: any[];
  appareilSubscription: Subscription;
  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000
    );
  });

  constructor(private appareilService: AppareilService, private authSetvice: Authservice) {
    this.isAuth = this.authSetvice.isAuth;
  }

  ngOnInit() {
    this.appareilSubscription = this.appareilService.appareilSubject.subscribe(
      (appareils: any[]) => this.appareils = appareils);
    this.appareilService.emitAppareilSubject();
  }
  onAllumer() {
    this.appareilService.switchOnAll();
  }

  onEteindre() {
    if (confirm('Êtes vous sur de vouloir éteindre tous vos appareil ?')) {
      this.appareilService.switchOffAll();
    } else {
      return null;
    }
  }

  onSave() {
    this.appareilService.saveAppareilsToServer();
  }

  onLoad() {
    this.appareilService.getAppareilsFromServer();
  }
}
