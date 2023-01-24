import { CommonModule } from '@angular/common';
import { Component, Input, NgModule, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HelperService } from 'src/app/services/shared/helper.service';

@Component({
  selector: 'category-list',
  template: `
    <div class="budget-card">
      <div class="budget-card-header">
        <div>
          <img [src]="budget?.icon" />
          <div class="category-spending">
            <ion-label>{{ budget?.title }}</ion-label>
            <span>
              {{ formatMoney(budget?.spent) }}
            </span>
          </div>
        </div>

        <ion-icon name="chevron-forward-outline" color="accent-200"></ion-icon>
      </div>
    </div>
  `,
  styles: [
    `
      .budget-card {
        background: var(--ion-color-dark-200);

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
      }

      .budget-card-header > div {
        display: flex;
        align-items: center;
        gap: 1rem;
      }

      .category-spending {
        display: flex;
        flex-direction: column;
      }

      .category-spending span {
        margin-top: 0.4rem;
        font-size: 0.8rem;
        color: #909090;
      }
    `,
  ],
})
export class CategoryListComponent implements OnInit {
  @Input() budget: any = {};
  constructor(private helper: HelperService) {}

  ngOnInit() {}

  formatMoney(value) {
    return this.helper.format(value);
  }
}

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule],
  declarations: [CategoryListComponent],
  exports: [CategoryListComponent],
})
export class CategoryListModule {}
