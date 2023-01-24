import { Component, OnInit } from '@angular/core';
import { transactions } from 'src/app/services/shared/transaction';
@Component({
  selector: 'app-activity',
  templateUrl: './activity.page.html',
  styleUrls: ['./activity.page.scss'],
})
export class ActivityPage implements OnInit {
  transactions: any[];

  constructor() {
    this.transactions = transactions;
  }

  ngOnInit() {}
}
