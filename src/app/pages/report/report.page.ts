import { Component, OnInit } from '@angular/core';
import { budgets } from 'src/app/services/shared/budget';
import Chart from 'chart.js/auto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-report',
  templateUrl: './report.page.html',
  styleUrls: ['./report.page.scss'],
})
export class ReportPage implements OnInit {
  budgets = [];
  chart: any;

  constructor(private router: Router) {
    this.budgets = budgets;
  }

  ngOnInit() {
    this.createChart();
  }

  details(id) {
    this.router.navigate([`/details/${id}`]);
  }

  colors() {
    return this.budgets.map((budget) => budget.color.active);
  }

  data() {
    return this.budgets.map((budget) => budget.spent);
  }

  labels() {
    return this.budgets.map((budget) => budget.title);
  }

  createChart() {
    this.chart = new Chart('reportChart', {
      type: 'doughnut',

      data: {
        labels: this.labels(),
        datasets: [
          {
            data: this.data(),
            backgroundColor: this.colors(),
            hoverOffset: 4,
            borderWidth: 0,
          },
        ],
      },
      options: {
        layout: {
          padding: 20,
        },
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            callbacks: {
              label: function (ctx) {
                console.log(ctx);
                return `${ctx.label}: $${ctx.formattedValue}`;
              },
            },
          },
        },
      },
    });
  }
}
