import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { ELEMENT_DATA } from '../../constant/data-constant';

@Component({
  selector: 'app-bt-table',
  standalone: true,
  imports: [CommonModule,NgFor],
  templateUrl: './bt-table.component.html',
  styleUrl: './bt-table.component.scss'
})
export class BtTableComponent {
  data : any  =ELEMENT_DATA
}
