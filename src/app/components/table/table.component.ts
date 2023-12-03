import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { DataElement } from '../../module/data-interface';
import { ELEMENT_DATA } from '../../constant/data-constant';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';


@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    CommonModule ,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent {
  displayedColumns: string[] = ['id','user', 'ticketNumber', 'rate', 'cinemas', 'peopleNumber', 'numberPurchasing', 'ticket',];
  dataSource = new MatTableDataSource<DataElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    console.log(this.dataSource);
    this.dataSource.paginator = this.paginator;
  }
}

