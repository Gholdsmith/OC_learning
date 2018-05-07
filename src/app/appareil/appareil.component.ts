import { Component, OnInit, Input } from '@angular/core';
import { AppareilService } from '../services/appareil.service';
import { Authservice } from '../services/auth.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  @Input() appareilName: string;
  @Input() appareilStatus: string;
  @Input() indexOfAppareil: number;
  @Input() id: number;
  isAuth: boolean;

  constructor(private appareilService: AppareilService, private authService: Authservice) {

  }

  ngOnInit() {
    this.isAuth = this.authService.isAuth;
  }

  getStatus() {
    return this.appareilStatus;
  }

  onSwitch() {
    if (this.appareilStatus === 'allumé') {
      this.appareilService.switchOffOne(this.indexOfAppareil);
    } else if (this.appareilStatus === 'éteint') {
      this.appareilService.switchOnOne(this.indexOfAppareil);
    }
  }

}
