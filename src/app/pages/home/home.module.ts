import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { BudgetCardModule } from 'src/app/components/budget/budget-card.component';
import { FloatingButtonModule } from 'src/app/components/button/floating-button.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    FloatingButtonModule,
    BudgetCardModule,
  ],
  declarations: [HomePage],
})
export class HomePageModule {}
