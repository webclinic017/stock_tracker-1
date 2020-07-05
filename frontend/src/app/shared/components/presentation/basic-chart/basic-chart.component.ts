import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
// import {ChartDataSets, ChartOptions} from 'chart.js';
// import {Color, Label, ThemeService} from 'ng2-charts';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-basic-chart',
  templateUrl: './basic-chart.component.html',
  styleUrls: ['./basic-chart.component.scss']
})
export class BasicChartComponent implements OnInit {
  // Set true to show legends
  @Input() lineChartLegend = true;

  // Define type of chart
  @Input() lineChartType = 'line';


  // Array of different segments in chart -> {data: data, label: label}
  @Input() lineChartData: any[];

  // Labels shown on the x-axis
  @Input() lineChartLabels = [];

  @Input() height = '300'; // in px
  @Input() width = '100'; // in %
  @Input() lineChartColors = [];

  // Define chart options
  lineChartOptions = {};
  Highcharts = Highcharts;

  constructor() {
  }


  ngOnInit(): void {
    this.applyDarkMode();
  }


  applyDarkMode() {
    this.lineChartOptions = {
      chart: {
        type: 'area'
      },
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        labels: {fontColor: 'white'},
      },
      tooltips: {
        bodyFontSize: 15,
        mode: 'index',
        intersect: false,
        titleMarginBottom: 10,
        xPadding: 15,
        yPadding: 15,
      },
      hover: {
        mode: 'index',
        intersect: false
      },
      credits: {
        enabled: false
      },
      exporting: {
        enabled: true,
      },
      series: this.lineChartData,
      scales: {
        xAxes: [{
          display: false,
          ticks: {
            fontColor: 'white',
            autoSkip: true

          },
          gridLines: {
            color: 'rgba(255,255,255,0.1)',
            offsetGridLines: true
          }
        }],
        yAxes: [{
          ticks: {fontColor: 'white'},
          gridLines: {color: 'rgba(255,255,255,0.1)'}
        }]
      }
    };
  }


}