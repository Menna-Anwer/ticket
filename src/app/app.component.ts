import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TableComponent } from "./components/table/table.component";
import { TicketComponent } from './components/ticket/ticket.component';
import { ChartComponent } from "./components/chart/chart.component";
import { HeaderComponent } from './components/header/header.component';
import { BtTableComponent } from "./components/bt-table/bt-table.component";
// import { NgApexchartsModule } from 'ng-apexcharts';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [
        CommonModule,
        RouterOutlet,
        TableComponent,
        TicketComponent,
        ChartComponent,
        HeaderComponent,
        BtTableComponent
    ]
})
export class AppComponent {
  title = 'my-task-ticket';
}
