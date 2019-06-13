import { Component, OnInit } from "@angular/core";
import * as Chartist from "chartist";
import * as moment from "moment";
import "moment/locale/fr";
import { style } from "@angular/animations";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  //test : Date = new Date();
  currentDate;
  currentTime;
  Jour;
  constructor() {}
  startAnimationForLineChart(chart) {
    let seq: any, delays: any, durations: any;
    seq = 0;
    delays = 80;
    durations = 500;

    chart.on("draw", function(data) {
      if (data.type === "line" || data.type === "area") {
        data.element.animate({
          d: {
            begin: 600,
            dur: 700,
            from: data.path
              .clone()
              .scale(1, 0)
              .translate(0, data.chartRect.height())
              .stringify(),
            to: data.path.clone().stringify(),
            easing: Chartist.Svg.Easing.easeOutQuint
          }
        });
      } else if (data.type === "point") {
        seq++;
        data.element.animate({
          opacity: {
            begin: seq * delays,
            dur: durations,
            from: 0,
            to: 1,
            easing: "ease"
          }
        });
      }
    });

    seq = 0;
  }
  startAnimationForBarChart(chart) {
    let seq2: any, delays2: any, durations2: any;

    seq2 = 0;
    delays2 = 80;
    durations2 = 500;
    chart.on("draw", function(data) {
      if (data.type === "bar") {
        seq2++;
        data.element.animate({
          opacity: {
            begin: seq2 * delays2,
            dur: durations2,
            from: 0,
            to: 1,
            easing: "ease"
          }
        });
      }
    });

    seq2 = 0;
  }
  ngOnInit() {
    this.currentDate = moment()
      .locale("fr")
      .format("DD/MM/YYYY");
    this.currentTime = moment()
      .locale("fr")
      .format("LT");
    this.Jour = moment()
      .locale("fr")
      .format("dddd");

    var data = {
      series: [5, 3]
    };

    var sum = function(a, b) {
      return a + b;
    };

    new Chartist.Pie(".ct-chart", data, {
      labelInterpolationFnc: function(value) {
        return Math.round((value / data.series.reduce(sum)) * 100) + "%";
      }
    });
    /* .......................................*/

    /* ----------==========     Daily Sales Chart initialization For Documentation    ==========---------- */
    /*
      var dataDailySalesChart: any = {
          labels: ['dép/rev'],
          series: [
              [17],
              [30]
          ]
      };

     var optionsDailySalesChart: any = {
          lineSmooth: Chartist.Interpolation.cardinal({
              tension: 0
          }),
          low: 0,
          high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
          chartPadding: { top: 0, right: 0, bottom: 0, left: 0},
      }

      var dailySalesChart = new Chartist.Bar('#dailySalesChart', dataDailySalesChart, optionsDailySalesChart);

      this.startAnimationForBarChart(dailySalesChart);

      */
    /* ----------==========     Completed Tasks Chart initialization    ==========---------- */

    const dataCompletedTasksChart: any = {
      labels: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
      series: [[542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]]
    };

    const optionsCompletedTasksChart: any = {
      lineSmooth: Chartist.Interpolation.cardinal({
        tension: 0
      }),
      low: 0,
      high: 1000, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
      chartPadding: { top: 0, right: 0, bottom: 0, left: 0 }
    };

    var completedTasksChart = new Chartist.Line(
      "#completedTasksChart",
      dataCompletedTasksChart,
      optionsCompletedTasksChart
    );

    // start animation for the Completed Tasks Chart - Line Chart
    this.startAnimationForLineChart(completedTasksChart);

    /* ----------==========     MOIS Subscription Chart initialization    ==========---------- */

    var datawebsiteViewsChart = {
      labels: [" S1", "S2", "S3", "S4"],
      series: [[542, 443, 320, 780], [500, 400, 250, 700]]
    };
    var optionswebsiteViewsChart = {
      axisX: {
        showGrid: false
      },
      low: 0,
      high: 1000,
      chartPadding: { top: 0, right: 5, bottom: 0, left: 0 }
    };
    var responsiveOptions: any[] = [
      [
        "screen and (max-width: 500px)",
        {
          seriesBarDistance: 5,
          axisX: {
            labelInterpolationFnc: function(value) {
              return value[0];
            }
          },
          axisY: {
            style: "stroke-width: 300px",
            labelInterpolationFnc: function(value) {
              return value;
            }
          }
        }
      ]
    ];
    var datasiteViewsChart = new Chartist.Bar(
      "#websiteViewsChart",
      datawebsiteViewsChart,
      optionswebsiteViewsChart,
      responsiveOptions
    );

    //start animation for the MOIS Subscription Chart
    this.startAnimationForBarChart(datasiteViewsChart);
  }
}
