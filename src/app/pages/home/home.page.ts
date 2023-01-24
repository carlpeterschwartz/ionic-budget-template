import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { budgets } from 'src/app/services/shared/budget';
import { HelperService } from 'src/app/services/shared/helper.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  budgets = [];
  constructor(private helper: HelperService, private router: Router) {
    this.budgets = budgets;
  }

  ngOnInit() {}

  details(id) {
    this.router.navigate([`/details/${id}`]);
  }

  totalSpent(budgets) {
    return budgets.reduce((accumulator, budget) => {
      return accumulator + budget.spent;
    }, 0);
  }

  totalBudget(budgets) {
    return budgets.reduce((accumulator, budget) => {
      return accumulator + budget.limit;
    }, 0);
  }

  formatMoney(value) {
    return this.helper.format(value);
  }
}
