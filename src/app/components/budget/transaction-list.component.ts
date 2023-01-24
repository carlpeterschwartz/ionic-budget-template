import { CommonModule } from '@angular/common';
import { Component, Input, NgModule, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { HelperService } from 'src/app/services/shared/helper.service';

@Component({
  selector: 'transaction-list',
  template: `
    <div
      class="transactions-card"
      [style]="lastIndex === index ? 'border-bottom: none' : ''"
    >
      <div>
        <ion-label>{{ transaction?.title }}</ion-label>
        <span class="budget-category" [style]="'color:' + transaction?.color">{{
          transaction?.category
        }}</span>
      </div>
      <div class="budget-amount">
        <ion-label>-{{ formatMoney(transaction?.amount) }}</ion-label>
        <span class="budget-category">{{ transaction?.date }}</span>
      </div>
    </div>
  `,
  styles: [
    `
      .transactions-card {
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid var(--ion-color-dark-300);
        padding-bottom: 1rem;
        padding-top: 1rem;
      }

      .transactions-card div {
        display: flex;
        flex-direction: column;
      }

      .budget-amount ion-label {
        padding-left: 10px;
      }

      .budget-category {
        margin-top: 0.4rem;
        font-size: 0.8rem;
        color: #909090;
      }
    `,
  ],
})
export class TransactionListComponent implements OnInit {
  @Input() transaction: any;
  @Input() index: any;
  @Input() lastIndex: any;

  constructor(private helper: HelperService) {}

  ngOnInit() {}

  formatMoney(value) {
    return this.helper.format(value);
  }
}

@NgModule({
  imports: [CommonModule, IonicModule],
  declarations: [TransactionListComponent],
  exports: [TransactionListComponent],
})
export class TransactionListCardModule {}
