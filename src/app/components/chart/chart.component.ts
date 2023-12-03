import { Component, CUSTOM_ELEMENTS_SCHEMA, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartModule } from 'primeng/chart';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle,
  ApexNonAxisChartSeries
} from "ng-apexcharts";
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// export type ChartOptions = {
//   series: ApexAxisChartSeries;
//   chart: ApexChart;
//   xaxis: ApexXAxis;
//   title: ApexTitleSubtitle;
// };
@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [
    CommonModule,
    ChartModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.scss'
})
export class ChartComponent implements OnInit {
 
  // @Input() chart!: ApexChart;
  // @Input() labels!: string[];
  // @Input() series!: ApexAxisChartSeries | ApexNonAxisChartSeries;
  // @Input() xaxis!: ApexXAxis;
  // @Input() title!: ApexTitleSubtitle;
  // @Input() subtitle!: ApexTitleSubtitle;
  // // @ViewChild("chart") chart: ChartComponent;
  // // @ViewChild('chart_CONTENT') chart_CONTENT!: TemplateRef<unknown>;

  // chartOptions: { series: { name: string; data: number[]; }[]; chart: { height: number; type: string; }; title: { text: string; }; xaxis: { categories: string[]; }; };
  // constructor() {
  //   this.chartOptions = {
  //     series: [
  //       {
  //         name: "My-series",
  //         data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
  //       }
  //     ],
  //     chart: {
  //       height: 350,
  //       type: "bar"
  //     },
  //     title: {
  //       text: "My First Angular Chart"
  //     },
  //     xaxis: {
  //       categories: ["Jan", "Feb",  "Mar",  "Apr",  "May",  "Jun",  "Jul",  "Aug", "Sep"]
  //     }
  //   };
  //   console.log("this.chartOptions",this.chartOptions)
  // }
  data: any;

  options: any;

  ngOnInit() {
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue('--text-color');
      const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
      const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
      
      this.data = {
          labels: ['يناير', 'فبراير', 'مارس', 'ابريل', 'مايو', 'يونيو', 'يوليو','أغسطس','سبتمبر','اكتوبر','نوفمبر','ديسمبر'],
          datasets: [
        
              {
                  label: 'Third Dataset',
                  data: [12, 51, 62, 33, 21, 62, 45,65,37,52,21,69],
                  fill: true,
                  borderColor: '#8A74F9',
                  tension: 0.4,
                  backgroundColor: 'rgba(138, 116, 249, 0.26)'

              }
          ]
      };
      
      this.options = {
          maintainAspectRatio: true,
          aspectRatio: 3,
          plugins: {
              legend: {
                  labels: {
                      color: textColor
                  }
              }
          },
          scales: {
              x: {
                  ticks: {
                      color: textColorSecondary
                  },
                  grid: {
                      color: surfaceBorder
                  }
              },
              y: {
                  ticks: {
                      color: textColorSecondary
                  },
                  grid: {
                      color: surfaceBorder
                  }
              }
          }
      };
  }
}
