import { CommonModule } from '@angular/common';
import { Component, Input, NgModule, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HelperService } from 'src/app/services/shared/helper.service';

@Component({
  selector: 'details-card',
  template: `
    <div class="budget-card">
      <div class="budget-card-header">
        <p class="large-amount">
          {{ formatMoney(budget?.limit - budget?.spent) }}
        </p>
        <span class="sub-title">Remaining</span>
      </div>
      <div class="budget-card-meta">
        <div class="budget-card-meta-item">
          <span>Spent</span>
          <b>{{ formatMoney(budget?.spent) }}</b>
        </div>

        <div class="budget-card-meta-item">
          <span>Limit</span>
          <b>{{ formatMoney(budget?.limit) }}</b>
        </div>
      </div>
      <div class="budget-card-meter">
        <ion-range
          [value]="rangeMeter(budget?.limit, budget?.spent)"
          disabled="true"
          [style]="
            '--bar-background:' +
            budget?.color?.background +
            ';' +
            '--bar-background-active:' +
            budget?.color?.active +
            ';'
          "
        ></ion-range>
      </div>
      <span class="budget-notice">
        {{
          rangeMeter(budget?.limit, budget?.spent) > 70
            ? ' 😱 Watch your burn rate!!!'
            : ' 🔥 Your  burn rate for is on track!'
        }}
      </span>
    </div>
  `,
  styles: [
    `
      .large-amount {
        margin: 0;
        margin-bottom: 0.1rem;
      }

      .budget-card {
        background: var(--ion-color-dark-200);
        min-height: 15.313rem;
        border-radius: 1.563rem;
        padding: 1rem;
        margin-bottom: 1.2rem;
      }

      .budget-card ion-label {
        font-weight: 590;
      }

      .budget-card-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;
        border-bottom: 1px solid var(--ion-color-dark-300);
        padding-bottom: 1rem;
      }

      .budget-card-header > div {
        display: flex;
        align-items: center;
        gap: 1rem;
      }

      .budget-card-meta {
        display: flex;
        justify-content: space-between;
        margin-top: 1rem;
      }

      .budget-card-meta-item {
        display: flex;
        flex-direction: column;
        gap: 0.3rem;
      }

      .budget-card-meta-item span {
        font-size: 0.87rem;
      }
      .budget-card-meter {
        margin-top: 1rem;
      }

      ion-range {
        --bar-height: 18px;
        --bar-border-radius: 8px;
        --knob-size: 0px;
        padding: 0;
      }

      .budget-notice {
        display: block;
        margin-top: 0.8rem;
        font-size: 0.9rem;
        color: #909090;
      }
    `,
  ],
})
export class DetailsCardComponent implements OnInit {
  @Input() budget: any = {};

  constructor(private helper: HelperService) {}

  ngOnInit() {}

  formatMoney(value) {
    return this.helper.format(value);
  }

  rangeMeter(limit, spent) {
    return (spent / limit) * 100;
  }
}

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule],
  declarations: [DetailsCardComponent],
  exports: [DetailsCardComponent],
})
export class DetailsCardModule {}
