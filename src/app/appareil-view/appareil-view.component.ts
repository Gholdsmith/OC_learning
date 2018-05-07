import { Component, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';
import { Authservice } from '../services/auth.service';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {

  isAuth: boolean;
  appareils: any[];
  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000
    );
  });

  constructor(private appareilService: AppareilService, private authSetvice: Authservice) {
  }

  ngOnInit() {
    this.appareils = this.appareilService.appareils;
    this.isAuth = this.authSetvice.isAuth;
  }
  onAllumer() {
    this.appareilService.switchOnAll();
  }

  onEteindre() {
    if (confirm('Êtes vous sur de vouloir éteindre tous vos appreil ?')) {
      this.appareilService.switchOffAll();
    } else {
      return null;
    }
  }
}
