import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { budgets } from 'src/app/services/shared/budget';
import { chartData } from 'src/app/services/shared/chartData';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  budget: any;
  id: any;
  chart: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.getBudget();
    this.createChart();
  }

  getBudget() {
    this.budget = budgets.find((b) => b.id == this.id);
  }

  createChart() {
    this.chart = new Chart('burnChart', {
      type: 'bar',

      data: {
        ...chartData.data,
        datasets: [
          {
            ...chartData.data.datasets[0],
            backgroundColor: this.budget?.color?.active,
          },
        ],
      },
      options: chartData.options,
    });
  }
}
