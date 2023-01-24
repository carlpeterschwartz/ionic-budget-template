import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailsPageRoutingModule } from './details-routing.module';

import { DetailsPage } from './details.page';
import { DetailsCardModule } from 'src/app/components/budget/details-card.component';
import { FloatingButtonModule } from 'src/app/components/button/floating-button.component';
import { TransactionListCardModule } from 'src/app/components/budget/transaction-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FloatingButtonModule,
    DetailsCardModule,
    DetailsPageRoutingModule,
    TransactionListCardModule,
  ],
  declarations: [DetailsPage],
})
export class DetailsPageModule {}
