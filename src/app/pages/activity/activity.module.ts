import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActivityPageRoutingModule } from './activity-routing.module';

import { ActivityPage } from './activity.page';
import { TransactionListCardModule } from 'src/app/components/budget/transaction-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TransactionListCardModule,
    ActivityPageRoutingModule,
  ],
  declarations: [ActivityPage],
})
export class ActivityPageModule {}
