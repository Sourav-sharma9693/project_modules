import {Component} from '@angular/core';

/**
 * @title Table with sticky header
 */
@Component({
  selector: 'app-history-page',
  styleUrls: ['history-page.component.css'],
  templateUrl: 'history-page.component.html',
})
export class HistoryPageComponent {
  displayedColumns = ['position', 'quiz_name', 'conducted_on', 'marks'];
  dataSource = ELEMENT_DATA;
}

export interface PeriodicElement {
  position:number;
  quiz_name: string;
  conducted_on: number;
  marks: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, quiz_name: 'qn1', marks: 179 , conducted_on: 123 },
  {position: 2, quiz_name: 'qn2', marks: 426 , conducted_on: 123},
  {position: 3, quiz_name: 'qn3', marks: 641 , conducted_on: 123},
  {position: 4, quiz_name: 'qn4', marks: 122 , conducted_on: 123},
  {position: 5, quiz_name: 'qn5', marks: 111 , conducted_on: 123},
  {position: 6, quiz_name: 'qn6', marks: 107 , conducted_on: 123},
  {position: 7, quiz_name: 'qn7', marks: 106 , conducted_on: 123},
  {position: 8, quiz_name: 'qn8', marks: 194 , conducted_on: 123},
  {position: 9, quiz_name: 'qn9', marks: 184 , conducted_on: 123},
  {position: 10, quiz_name: 'qn10', marks: 297 , conducted_on: 123},
];
